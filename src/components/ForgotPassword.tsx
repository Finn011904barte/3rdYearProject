import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/AuthenticationInterface.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
  
      navigate('/otp'); 
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img src="/logo.png" alt="Derma AI Logo" className="logo" />
        <div className="login-container">
          <h2>Forgot Password</h2>
          <p className="subtext">Enter your email and we’ll send you reset instructions.</p>
          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </form>
          <div className="footer-text">
            <a href="/">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
