import React, { useState } from 'react';
import '../pages/AuthenticationInterface.css';

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("✅ Password reset successfully!");
  
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img src="/logo.png" alt="Derma AI Logo" className="logo" />
        <div className="login-container">
          <h2>Reset Password</h2>
          <p className="subtext">✅ OTP Verified! You can now reset your password.</p>

          <form onSubmit={handleSubmit}>
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit">Reset Password</button>
          </form>

          <div className="footer-text">
            Remember your password? <a href="/">Go to login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;

