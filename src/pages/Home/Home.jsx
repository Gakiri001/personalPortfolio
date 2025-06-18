import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="me">
        <h2>Hello, I'm Julius.</h2>
        <h2>Full-stack Developer</h2>
      </div>
      <div className="div-buttons">
        <button className="buttonMore">Contact Me</button>
        <button className="buttonDownload">Download Resume</button>
      </div>
      <div className="divLinks">
        <a href="">
          <FaLinkedin className="reactIcons text-blue-900 hover:text-blue-400" />
        </a>
        <a href="">
          <FaSquareXTwitter className="reactIcons  hover:text-gray-400" />
        </a>
        <a href="">
          <FaYoutube className="reactIcons text-red-700  hover:text-red-400" />
        </a>
        <a href="">
          <FaFacebook className="reactIcons text-blue-900  hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
}

export default Home;
