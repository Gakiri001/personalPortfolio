import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/tech.jpg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
    console.log("open");
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  console.log("Hello");

  return (
    <div className="header">
      <div className="header1">
        <img src={logo} alt="Image about tech" />
      </div>
      <div className={`header2 ${menuOpen ? "active" : ""}`}>
        <ul>
          <div id="menu-close" className="close" onClick={handleMenuClose}>
            <IoCloseCircleOutline />
          </div>
          <li>
            <Link onClick={handleMenuClose} className="link" to="">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className="link" to="/aboutme">
              About Me
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className="link" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className="link" to="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className="link" to="">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className="link" to="">
              Contact
            </Link>
          </li>
        </ul>
        <div id="menu-btn" className="hamburger" onClick={handleMenuOpen}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
