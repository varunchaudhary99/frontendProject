import React, { useState } from 'react';
import '../App.css';
import { BASE_URL } from './constants';
function OtpPopup({ isOpen, onClose, mobile, onVerifySuccess }) {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch(`${BASE_URL}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, otp }),
      });

      const result = await response.json();

      if (response.ok) {
         localStorage.setItem('token', result.token); 
        setMessage('OTP verified successfully!');
        onVerifySuccess();
      } else {
        setMessage(result.error || 'Invalid OTP');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error verifying OTP');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          className="input-box"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button className="continue-btn" onClick={handleVerifyOtp}>
          Verify OTP
        </button>
        {message && <p className="terms">{message}</p>}
      </div>
    </div>
  );
}

export default OtpPopup;
