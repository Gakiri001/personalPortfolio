import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/hello.jpeg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <div className={`header2 ${menuOpen ? "active" : ""}`}>
        <ul>
          <div id="menu-close" className="close" onClick={handleMenuClose}>
            <IoCloseCircleOutline className="closeIcon" />
          </div>
          <li>
            <NavLink
              onClick={handleMenuClose}
              className={({ isActive }) =>
                isActive ? "linkActive" : "NavLink"
              }
              to=""
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleMenuClose}
              className={({ isActive }) =>
                isActive ? "linkActive" : "NavLink"
              }
              to="/aboutme"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleMenuClose}
              className={({ isActive }) =>
                isActive ? "linkActive" : "NavLink"
              }
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleMenuClose}
              className={({ isActive }) =>
                isActive ? "linkActive" : "NavLink"
              }
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleMenuClose}
              className={({ isActive }) =>
                isActive ? "linkActive" : "NavLink"
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleMenuClose}
              className={({ isActive }) =>
                isActive ? "linkActive" : "NavLink"
              }
              to="/contact"
            >
              Contact
            </NavLink>
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
