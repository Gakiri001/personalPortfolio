import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "./About.css";
import me from "../../assets/mimi2.JPG";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function About() {
  return (
    <div className="parentforAbout">
      <div className="headingforAbout">
        <h2>About Me</h2>
        <FaInfoCircle className="aboutIcon" />
      </div>
      <Card className="aboutMeSection">
        <div className="infoPart">
          <Card className="cardinfoPart">
            <CardHeader>
              <CardTitle className="cardTitle">
                Full-Stack Developer, Junior Accountant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="aboutParagraph">
                A skilled web developer and accountant(CPA). Experienced in
                front-end and back-end technologies like HTML5, CSS3,JS, React,
                Node.js, and RESTful APIs. Experienced in database management
                with MySQL, PostgreSQL, and MongoDB. Experienced in using design
                tools like Adobe Photoshop and Figma to create beautiful
                interfaces. GitHub profile:{" "}
                <a className="underline" href="https://github.com/Gakiri001/">
                  https://github.com/Gakiri001/
                </a>
                <br /> <br />
                High-quality experience in the preparation of accounting
                statements, auditing procedures, risk analysis, budgeting, and
                forecasting. Utilizes sophisticated Excel in economic modeling
                and data analysis. Committed to applying technical skills to
                further web development while maintaining a strong grounding in
                accounting procedures.
                <br /> <br />
                Apt problem-solving and critical thinking skills, such as making
                strategic choices. Strong leadership and team management in
                various environments. Highly adaptable to change, with strong
                organizational and time management skills. Strong verbal and
                written communication skills, enabling effective collaboration
                and teamwork. Emotionally intelligent and capable of handling
                mixed team dynamics for mutual goals.
              </p>
            </CardContent>
          </Card>

          <div className="line"></div>
          <Card className="cardPersnalInfo">
            <CardHeader>
              <CardTitle className="cardTitle">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
        <div className="imagePart">
          <img src={me} alt="" />
        </div>
      </Card>
    </div>
  );
}

export default About;
