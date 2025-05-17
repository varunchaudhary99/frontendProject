import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoginPopup from '../components/login_popup';

import '../App.css'; 

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
    } else {
      alert('Logout failed');
    }
  } catch (err) {
    alert('Logout error');
  }
};

  return (
    <div>
      <header className="navbar">
        <div className="navbar-left">
          <img src={require('../assets/logo1.png')} alt="Logo" className="logo" />
          <nav className="menu">
            <div className="dropdown">
              <a href="#">Insurance <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                 <Link className="nav-link " aria-current="page" to="/car" >Car Insurance</Link>
                <Link className="nav-link " aria-current="page" to="/bike" >Bike Insurance</Link>
                  <Link className="nav-link " aria-current="page" to="/health" >Health Insurance</Link>
                  <Link className="nav-link " aria-current="page" to="/investment" >Investment</Link>
              </div>
            </div>

            <div className="dropdown">
              <a href="#">Insurance Advisors <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                <Link className="nav-link " aria-current="page" to="/findadvisor" >Find Advisors</Link>
                <Link className="nav-link " aria-current="page" to="/JoinUs" >Join Us</Link>
              </div>
            </div>

            <div className="dropdown">
              <a href="#">Renew</a>
              <div className="dropdown-content">
                <Link className="nav-link " aria-current="page" to="/CarPolicy" >Car Policy</Link>
                <Link className="nav-link " aria-current="page" to="/healthpolicy" >Health Policy</Link>
              </div>
            </div>

            <div className="dropdown">
              <a href="#">Support <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                <Link className="nav-link " aria-current="page" to="/helpCenter" >Help Center</Link>
                <Link className="nav-link " aria-current="page" to="/contactus" >Contact Us</Link>
              </div>
            </div>

            <div className="dropdown">
              <a href="#">News <span className="arrow">▼</span></a>
              <div className="dropdown-content">
                <Link className="nav-link " aria-current="page" to="/latestupdate" >Latest Updates</Link>
                <Link className="nav-link " aria-current="page" to="/industrynews" >Industry News</Link>
              </div>
            </div>

            <div className="dropdown">
              <a href="#">Become POSP Agent</a>
              <div className="dropdown-content">
                <Link className="nav-link " aria-current="page" to="/howWork" >How It Works</Link>
                <a href="#">Register</a>
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
