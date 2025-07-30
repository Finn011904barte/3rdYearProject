import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'; // <-- Make sure path is correct
import Welcome from './components/Welcome';
import ForgotPassword from './components/ForgotPassword';
import OtpVerification from './components/OtpVerification';
import NewPassword from './components/NewPassword';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) return <Welcome user="User" />;

  return (
    <Router>
      {isLoggedIn && (
        <nav style={{ textAlign: 'center', margin: '1rem' }}>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
