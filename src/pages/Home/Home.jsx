import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Home.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Home() {
  const navigate = useNavigate()
  function handleContact() {
    navigate("/contact")
  }
  const handleDownload = () => {
    toast("Check your Downloads for the CV.", { 
      duration: 5000,
      style: {
        background: "green",
        color: "white"
      }
    }
    )
  }
  return (
    <div className="Home">
      <motion.div
        className="me"
        initial={{opacity:0, y: -50}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
      >
        <h2>
          <Typewriter
          options={{
            autoStart: true,
            loop:false,
            delay: 70,
            deleteSpeed: 50,
            cursor: ""
          }}
          onInit={(Typewriter) => {
            Typewriter
            .typeString("Hello, I'm Julius")
            .start();
          }}
          />
        </h2>
        <h2>
          <Typewriter
          options={{
            strings:["Full-stack Developer.", "Data & AI Enthuasiast.", "Junior Accountant."],
            autoStart: true,
            loop:true,
            delay: 70,
            deleteSpeed: 50,
          }}
          />
          </h2>
      </motion.div>

      {/*Buttons animate from right  */}
      <motion.div
      className="div-buttons"
      initial={{x:200, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1, delay:1}}
      >
        <button className="buttonMore" onClick={handleContact}>Contact Me</button>
        <a onClick={handleDownload} className="buttonDownload" href="/JuliusIrunguCV.pdf" download="Julius-Irungu-CV.pdf">Download Resume</a>
      </motion.div>

      <motion.div 
      className="divLinks"
      initial={{x:-200, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1, delay:1.5}}
      >
        <a
          href="https://www.linkedin.com/in/julius-irungu-87ab54362/"
          target="_blank"
        >
          <FaLinkedin className="reactIcons text-blue-900 hover:text-blue-400" />
        </a>
        <a href="https://x.com/techForeman1" target="_blank">
          <FaSquareXTwitter className="reactIcons  hover:text-gray-400" />
        </a>
        <a href="https://www.youtube.com/@GlobalJunction-Tech" target="_blank">
          <FaYoutube className="reactIcons text-red-700  hover:text-red-400" />
        </a>
        <a href="https://www.facebook.com/042software" target="_blank">
          <FaFacebook className="reactIcons text-blue-900  hover:text-blue-400" />
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
