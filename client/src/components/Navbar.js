
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/main-logo.png';
import login from './img/login.png';
import cart from './img/cart.png';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIconAnimation, setMenuIconAnimation] = useState("");

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setMenuIconAnimation(menuOpen ? "" : "animate");
  };

  return (
        <nav>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button className={`hamburger ${menuIconAnimation}`} onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className='login'><Link to="/"><img src={login} alt="Login-icon" /></Link></li>
            <li className='cart'><Link to="/register"><img src={cart} alt="Cart-icon" /></Link></li>
          </ul>
        </nav>
  );
}

export default Navbar;
