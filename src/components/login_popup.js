import React, { useState } from 'react';
import '../App.css';
import OtpPopup from './verifyotp'; 

function LoginPopup({ isOpen, onClose, onLoginSuccess }) {
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isOtpOpen, setIsOtpOpen] = useState(false); 

  const handleLogin = async () => {
    if (!mobile.match(/^\d{10}$/)) {
      setMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      const response = await fetch('http://localhost:5000/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('OTP sent successfully!');
        setIsOtpOpen(true); 
      } else {
        setMessage(result.error || 'Login failed');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="popup-overlay">
        <div className="popup-box">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>Sign in to InsuranceDekho</h2>
          <p>Login using your mobile number</p>
          <input
            type="text"
            placeholder="Mobile Number"
            className="input-box"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button className="continue-btn" onClick={handleLogin} disabled={loading}>
            {loading ? 'Sending...' : 'Continue'}
          </button>
          {message && <p className="terms">{message}</p>}
          <p className="terms">
            By continuing, I agree to <a href="#">Terms & Conditions</a>
          </p>
        </div>
      </div>

      
      <OtpPopup
        isOpen={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
        mobile={mobile}
        onVerifySuccess={() => {
          setIsOtpOpen(false);
          onLoginSuccess(); // ✅ Tell parent we're logged in
        }}></OtpPopup>
    </>
  );
}

export default LoginPopup;
