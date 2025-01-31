import React from "react";
import { Link } from "react-router-dom";
import "../src/style/Navbar.css";

const Navbar = ({ setData, cart }) => {
  
 
  return (
    <header className="sticky-top">
      <div className="nav-bar">
        {/* Brand Name */}
        <Link to="" className="brand">
          E-Shopping
        </Link>

       

        {/* Cart Icon */}
        <Link to="/" className="cart">
          <button type="button" className="logout">  
            Logout
          </button>
        </Link>
      </div>

     
    </header>
  );
};

export default Navbar;
