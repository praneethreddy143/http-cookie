import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:3001/login', { username, password }, { withCredentials: true })
      .then(() => {
        setAuthenticated(true);
        navigate('/home');
      })
      .catch(error => {
        setMessage('Login failed: ' + error.response.data);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
