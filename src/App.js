import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import Login from './Login';
import Home from './Home';

const ProtectedRoute = ({ element: Component }) => {
  const { authenticated } = React.useContext(AuthContext);
  console.log(authenticated);
  if (authenticated === null) {
    return <div>Loading...</div>;
  }

  return authenticated ? <Component /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute element={Home} />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
