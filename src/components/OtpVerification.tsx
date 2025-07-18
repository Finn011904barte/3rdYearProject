import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/AuthenticationInterface.css';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (otp === '123456') {
      navigate('/new-password');
    } else {
      alert('Incorrect OTP. Use 123456 for now.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <img src="/logo.png" alt="Derma AI Logo" className="logo" />
        <div className="login-container">
          <h2>Verify OTP</h2>
          <p className="subtext">Enter the code we emailed to you.</p>
          <form onSubmit={handleSubmit}>
            <label>OTP Code</label>
            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Verify</button>
          </form>
          <div className="footer-text">
            Didn’t get the code? <a href="#">Resend OTP</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
