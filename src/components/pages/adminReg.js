import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
function Register() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const navigate = useNavigate();
  
    
    
    const handleRegister = async (e) => {
      e.preventDefault();
      
      
        const { name, email, password } = formData;
      
        if (name.length < 2) {
          alert("Name must be at least 2 characters long.");
          return;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email.");
          return;
        }
      
        if (password.length < 6) {
          alert("Password must be at least 6 characters.");
          return;
        }
        
        // Proceed with registration logic here
      
      try {
        const response = await fetch('http://localhost:5000/api/Admin-register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            password: formData.password,
          }),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Registration failed');
        }
    
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registered successfully!');
    
      navigate('/adminNavbar');   
      
      } catch (error) {
        console.error('Registration failed:', error.message);
        alert('Registration failed: ' + error.message);
      }
    };
  
    return (
      <div className="card">
       <div className="logo-container">
  <img src={require('../assets/logo.png')} alt="logo" width="50" height="50" />
</div> <h2 style={{color:"#c2185b"}}>Sign Up</h2>
<form onSubmit={handleRegister}>
  <input
    type="text"
    placeholder="Name"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    required
    minLength={2}
  />
  
  <input
    type="email"
    placeholder="Email"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    required
  />
  
  <input
    type="password"
    placeholder="Password"
    value={formData.password}
    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    required
    minLength={6}
  />
  
  <button type="submit">Register</button>
</form>
        
      </div>
    );
  }
  
  export default Register;