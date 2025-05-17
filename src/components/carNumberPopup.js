import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function CarPopup({ isOpen, onClose, onLoginSuccess }) {
  const [carNumber, setCarNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleCarNumber = async () => {
    if (!carNumber.match(/^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{4}$/)) {
      setMessage('Please enter a valid car number');
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      const response = await fetch('http://localhost:5000/api/carNumber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carNumber }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('carNumber success!');
        navigate('/car'); 
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
        <p>Login using your car number</p>
        <input
          type="text"
          placeholder="DL-12-AL-9549"
          className="input-box"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
        />
        <button className="continue-btn" onClick={handleCarNumber} disabled={loading}>
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

export default CarPopup;
