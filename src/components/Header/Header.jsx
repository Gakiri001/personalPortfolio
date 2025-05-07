import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header1">
        <h1>Logo</h1>
      </div>
      <div className="header2">
        <ul>
          <li>
            <Link to="">Services</Link>
          </li>
          <li>
            <Link to="">Work</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Header;
