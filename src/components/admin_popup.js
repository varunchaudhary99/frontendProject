import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function AdminPopup({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


   const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
       
      const response = await fetch('http://localhost:5000/api/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inp_email: email,
          inp_password: password,
        }),
      });
    
      const data = await response.json();
    
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
        
      }
    
      if (!data.token) {
        throw new Error('Access token not found in response');
      }
       if(data.token){
        navigate('/admin')
       }
      console.log('Login successful, token:', data.token);
      
    } catch (err) {
      console.error('Login error:', err.message);
    }
  }
  if (!isOpen) return null;

  return (
    <>
     <div className="popup-overlay">
        <div className="popup-box">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>admin Login</h2>
          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="continue-btn" onClick={handleLogin} >Submit
            </button>
    
    </div>
    </div>
    </>
  );
}

export default AdminPopup;
