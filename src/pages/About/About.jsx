import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "./About.css";
import me from "../../assets/mimi.JPG";

function About() {
  return (
    <div className="parentforAbout">
      <div className="headingforAbout">
        <h2>About Me</h2>
        <FaInfoCircle className="aboutIcon" />
      </div>
      <section className="aboutMeSection">
        <div className="infoPart">
          <h2>Full-Stack Developer, Junior Accountant</h2>
          <p className="aboutParagraph">
            A skilled web developer and accountant. Proficient in both front-end
            and back-end technologies, including HTML5, CSS3,JS, React, Node.js,
            and RESTful APIs. Experienced in database management with MySQL,
            PostgreSQL, and MongoDB. Adept at using design tools like Adobe
            Photoshop and Figma to create visually appealing interfaces. GitHub
            profile:{" "}
            <a className="underline" href="https://github.com/Gakiri001/">
              https://github.com/Gakiri001/
            </a>
            <br /> <br />
            Strong background in financial statement preparation, auditing
            procedures, risk assessment, budgeting, and forecasting. Utilises
            advanced Excel for economic modelling and data analysis. Committed
            to leveraging technical skills to drive innovation in web
            development while maintaining a strong foundation in accounting
            practices.
            <br /> <br />
            Possesses strong problem-solving and critical thinking skills, with
            a keen ability to make strategic decisions. Demonstrated leadership
            and effective team management in collaborative environments. Highly
            adaptable to change, with excellent time management and
            organizational abilities. Skilled in both verbal and written
            communication, fostering productive teamwork and collaboration.
            Emotionally intelligent and capable of navigating diverse team
            dynamics to achieve common goals.
          </p>
          <div className="line"></div>
          <h2 className="personalDetails">Personal Information</h2>
          <p className="personalIntel">
            <span>Name: </span>Julius Irungu
          </p>
          <p className="personalIntel">
            <span>Age: </span>22
          </p>
          <p className="personalIntel">
            <span>Address </span>Nairobi, Kenya
          </p>
          <p className="personalIntel">
            <span>Email: </span>gakirijulius@gmail.com
          </p>
          <p className="personalIntel">
            <span>Contact: </span>+254 790 163 849
          </p>
        </div>
        <div className="imagePart">
          <img src={me} alt="" />
        </div>
      </section>
    </div>
  );
}

export default About;
