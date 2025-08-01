import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../pages/Login.css';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img src="/logo.png" alt="Derma AI Logo" className="logo" />
        <div className="login-container">
          <h2>Log In</h2>
      
          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {}
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>

            <button type="submit">Log in</button>
          </form>

   <p className="subtext">
  Don’t have an account? <Link to="/signup">Sign Up.</Link>
</p>

        </div>
      </div>
    </div>
  );
};

export default Login;
