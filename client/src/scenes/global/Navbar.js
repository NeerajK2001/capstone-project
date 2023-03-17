
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/main-logo.png';
import login from './img/login.png';
import cart from './img/cart.png';
import './css/Navbar.css';
// import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIconAnimation, setMenuIconAnimation] = useState("");

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setMenuIconAnimation(menuOpen ? "" : "animate");

  };
  
  
  //   const [color, setColor] = useState(false)
  //   const changeColor = () => {
  //     if (window.scrollY >=1){
  //       setColor(true)
  //     } else{
  //       setColor(false)
  //     }
  //   };

  // window.addEventListener('scroll',changeColor);

  //login page
  // const { loginWithRedirect, isAuthenticated, logout } = useAuth0();



  return (
        // <nav className={color ? 'navbar nav-bg' : 'navbar'}>
          <nav className='navbar nav-bg'>
          <Link to="/">
            <img src={logo} alt="Logo" className='logo'/>
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
            <li className='login'>
              {/* { isAuthenticated ? (
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
              ) : ( */}
                {/* <Link onClick={() => loginWithRedirect()}><img src={login} alt="Login-icon" /></Link> */}
                <Link to="/Signup"><img src={login} alt="Login-icon" /></Link>  
                {/* )
              } */}
              </li>
            <li className='cart'><Link to="/"><img src={cart} alt="Cart-icon" /></Link></li>
          </ul>
        </nav>  
  );
}

export default Navbar;
