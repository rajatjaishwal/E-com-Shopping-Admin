import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAuthPage.css';

const AdminPage = () => {
  const [adminID, setAdminID] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Hardcoded Admin credentials
  const validAdminID = 'jaissrajat123@gmail.com';
  const validPassword = 'rajat@143';

  const handleAdminLogin = () => {
    if (!adminID || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Check if credentials match
    if (adminID !== validAdminID || password !== validPassword) {
      setErrorMessage('Invalid Admin ID or Password');
      return;
    }

    // If credentials are correct, clear the error message and redirect
    setErrorMessage('');
    alert('Admin login successful');
    navigate('/admin'); // Navigate to home (/) on success
  };

  return (
    <div className="auth-container">
      <button className="return-button" onClick={() => navigate('/')}>
        ←
      </button>
      <h1>Admin Login</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="auth-form">
        <input
          type="text"
          placeholder="Admin ID"
          className="auth-input"
          value={adminID}
          onChange={(e) => setAdminID(e.target.value)}
        />
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>
        <button onClick={handleAdminLogin} className="auth-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
