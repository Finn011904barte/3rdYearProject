import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Home from './pages/Home';
import About from './pages/About';
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
    <BrowserRouter>
      {isLoggedIn && (
        <nav className="nav-center" style={{ textAlign: 'center', margin: '1rem' }}>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      )}

      <Routes>
        {}
        <Route path="/" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        {}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
