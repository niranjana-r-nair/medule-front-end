// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // For now, we'll just store loggedIn = true in localStorage
    // In a real app, you would check the credentials before setting this
    localStorage.setItem('loggedIn', true);
    navigate('/home');
  };

  return (
    <div className="container justify-content-center align-items-center">
        <div className="card p-4 col-md-6 col-lg-4" style={{ backgroundColor: 'white' }}>
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="brand text-center mb-4">Medule</h2>
          <h5 className="card-title text-center">Login</h5>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className="text-center mt-3">
            <a href="/signup" className="text-secondary" style={{ textDecoration: 'none' }}>Need an account? Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
