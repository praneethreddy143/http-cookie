import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Home = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
      .then(() => {
        setAuthenticated(false);
        navigate('/login');
      })
      .catch(error => {
        console.error('Logout failed:', error.message);
      });
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Protected content</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
