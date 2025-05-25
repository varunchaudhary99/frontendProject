import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoginPopup from '../components/login_popup';

import '../App.css'; 
import AdminPopup from './admin_popup';

function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 



const handleLogout = async () => {
  const token = localStorage.getItem('token'); 

  try {
    const response = await fetch('http://localhost:5000/api/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      localStorage.removeItem('token'); 
      alert('Logged out successfully!');
      window.location.href = '/'; // optional redirect
    } else {
      console.log(token)
      const data = await response.json();
      alert(data.error || 'Logout failed'); // better error message
    }

  } catch (err) {
    console.error(err);
    alert('Logout error');
  }
};


  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/"><img src={require('../assets/logo1.png')}  alt="Logo" className="logo" 
    style={{ width: '200px', height: 'auto' }} /></Link>
          <nav className="menu">
            <div className="dropdown">
              <a href="#">Insurance <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                 <Link className="nav-link " aria-current="page" to="/car" >Car Insurance</Link>
                <Link className="nav-link " aria-current="page" to="/bike" >Bike Insurance</Link>
                  <Link className="nav-link " aria-current="page" to="/health" >Health Insurance</Link>
                  <Link className="nav-link " aria-current="page" to="/investment" >Investment</Link>
                 <Link className="nav-link " aria-current="page" to="/trem" >Trem</Link>
                <Link className="nav-link " aria-current="page" to="/business" >Business</Link>
                  <Link className="nav-link " aria-current="page" to="/family" >Family</Link>
                  <Link className="nav-link " aria-current="page" to="/guaranteed" >Greanteed</Link> 
              </div>
            </div>

            <div className="dropdown">
              <a href="#">Insurance Advisors <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Delhi</Link>
                 <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Noida</Link>
                  <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Gurugram</Link>
                   <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Banglore</Link>
                    <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Fridabad</Link>
                     <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Dehradun</Link>
                      <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Hydrabad</Link>
                       <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Mumbai</Link>
                        <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Lucknow</Link>
                         <Link className="nav-link " aria-current="page" to="/findAdvisor" >Insurance Advisors Chandigarh</Link>
              </div>
            </div>

            <div className="dropdown">
  
               <Link  onClick={() => setIsPopupOpen(true)}>Renew</Link>
              <div className="dropdown-content">
                
              
              </div>
            </div>

            <div className="dropdown">
              <a href="#">Support <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                <Link   onClick={() => setIsPopupOpen(true)}>Renew Policy</Link>
                <Link   onClick={() => setIsPopupOpen(true)}>track Policy</Link>
               <Link   onClick={() => setIsPopupOpen(true)}>Download Policy</Link>
                 <Link onClick={() => setIsPopupOpen(true)}>Call Us</Link>
              </div>

            </div>

            <div className="dropdown">
              <a href="#">News <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                <Link className="nav-link " aria-current="page" to="/car" >Car Insurance</Link>
                <Link className="nav-link " aria-current="page" to="/bike" >Bike Insurance</Link>
                  <Link className="nav-link " aria-current="page" to="/health" >Health Insurance</Link>
                  <Link className="nav-link " aria-current="page" to="/investment" >Investment</Link>          
            <Link className="nav-link " aria-current="page" to="/trem" >Trem</Link>
                <Link className="nav-link " aria-current="page" to="/business" >Business</Link>
                  <Link className="nav-link " aria-current="page" to="/family" >Family</Link>
                  <Link className="nav-link " aria-current="page" to="/guaranteed" >Greanteed</Link>          </div>
         
            </div>

            <div className="dropdown">
              <a href="#">Become POSP Agent</a>
              <div className="dropdown-content">
                {/* <Link className="nav-link " aria-current="page" to="/howWork" >How It Works</Link>
                <a href="#">Register</a> */}
              </div>
            </div>
          </nav>
        </div>

        <div className="navbar-right">
          <a href="#" className="track-link">Track & Policy Download</a>
         {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={() => setIsPopupOpen(true)}>
              Login
            </button>
          )}
        </div>
         {/* <button className="login-btn" onClick={() => setIsPopupAdminOpen(true)}>
              Admin
            </button> */}
      </header>
      
      <LoginPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onLoginSuccess={() => {
          setIsPopupOpen(false);
          setIsLoggedIn(true); 
        }}
      ></LoginPopup>
      <Outlet />
    </div>
  );
}

export default Navbar;
