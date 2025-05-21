import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './constants';
function BikePopup({ isOpen, onClose, onLoginSuccess }) {
  const [bikeNumber, setBikeNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleBikeNumber = async () => {
    if (!bikeNumber.match(/^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{4}$/)) {
      setMessage('Please enter a valid car number');
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      const response = await fetch(`${BASE_URL}/bikeNumber`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bikeNumber }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('bikeNumber success!');
        navigate('/bike'); 
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
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Sign in to InsuranceDekho</h2>
        <p>Login using your bike number</p>
        <input
          type="text"
          placeholder="DL-12-AL-9549"
          className="input-box"
          value={bikeNumber}
          onChange={(e) => setBikeNumber(e.target.value)}
        />
        <button className="continue-btn" onClick={handleBikeNumber} disabled={loading}>
          {loading ? 'Sending...' : 'Continue'}
        </button>
        {message && <p className="terms">{message}</p>}
        <p className="terms">
          By continuing, I agree to <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
}

export default BikePopup;
