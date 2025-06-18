import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/tech.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header1">
        <img src={logo} alt="Image about tech" />
      </div>
      <div className="header2">
        <ul>
          <li>
            <Link className="link" to="">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/aboutme">
              About Me
            </Link>
          </li>
          <li>
            <Link className="link" to="">
              Skills
            </Link>
          </li>
          <li>
            <Link className="link" to="">
              Resume
            </Link>
          </li>
          <li>
            <Link className="link" to="">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="link" to="">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
