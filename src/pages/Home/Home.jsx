import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Home.css"

function Home() {
  return (
    <div className="Home">
      <div className="me">
        <h2>Hello, I'm Julius.</h2>
        <h2>Full-stack Developer</h2>
      </div>
      <div className="div-buttons">
        <button className="buttonMore">Contact Me</button>
        <button className="buttonDownload" >Download Resume</button>
      </div>
      <div className="divLinks">
        <a href="">
          <FaLinkedin className="reactIcons" />
        </a>
        <a href="">
          <FaXTwitter className="reactIcons" />
        </a>
        <a href="">
          <FaYoutube  className="reactIcons"/>
        </a>
        <a href="">
          <FaFacebook className="reactIcons" />
        </a>
      </div>
    </div>
  );
}

export default Home;
