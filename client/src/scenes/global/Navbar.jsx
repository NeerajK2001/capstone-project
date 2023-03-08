import { useDispatch, useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";
import {
  // PersonOutline,
  // ShoppingBagOutlinedIcon,
  // MenuOutlined,
  // SearchOutlined,
} from "@mui/icons-material";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useNavigate } from "react-router-dom";
// import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from './img/main-logo.png';
// import login from './img/login.png';
// import cart from './img/cart.png';
// import '../../components/Navbar.css';
import '../../styles/Navbar.css'

import logo from '../../components/img/main-logo.png';
import login from '../../components/img/login.png';
import cartIcon from '../../components/img/cart.png';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIconAnimation, setMenuIconAnimation] = useState("");
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/event">Event</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li className='login'><Link to="/"><img src={login} alt="Login-icon" /></Link></li>
            <li>
              <Badge
                badgeContent={cart.length}
                color="secondary"
                invisible={cart.length === 0}
                sx={{
                  "& .MuiBadge-badge": {
                    right: 5,
                    top: 5,
                    padding: "0 4px",
                    height: "14px",
                    minWidth: "13px",
                  },
                }}
              >
                <IconButton
                  onClick={() => dispatch(setIsCartOpen({}))}
                  sx={{ color: "black" }}
                >
                  <img src={cartIcon} alt="Cart-icon" />
                  {/* <ShoppingCartOutlinedIcon /> */}
                </IconButton>
              </Badge>
            </li>
          </ul>
        </nav>
  );
}

export default Navbar;
