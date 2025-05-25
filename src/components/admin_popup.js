import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function AdminPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

const handleSignupClick = () => {
    navigate('/register');
  };
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
        navigate('/adminNavbar')
       }
      console.log('Login successful, token:', data.token);
      
    } catch (err) {
      console.error('Login error:', err.message);
    }
  }
  if (!isOpen) return null;

  return (
    <>
     <div className="card">
        <div className="logo-container">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>admin Login</h2>
            <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <button type="submit">Login</button>

      <button onClick={handleSignupClick}>Register</button>
    
      </form>
      
    </div>
    </div>
    </>
  );
}

export default AdminPopup;
