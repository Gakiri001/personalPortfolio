import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skillsHeader">
        <h2>Skills</h2>
        <FaInfoCircle className="skillIcon" />
      </div>
      <section>
        <div className="fullstack">
          <h2>Full-stack skills</h2>
          <div className="fullstackDetails">
            <div className="frontend">
              <h3>Front-end </h3>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
            </div>
            <div className="frontend">
              <h3>Front-end </h3>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
            </div>
            <div className="frontend">
              <h3>Front-end </h3>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="skillonTopDiv"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accountant">
          <h2>Accountant Skills</h2>
        </div>
      </section>
    </div>
  );
}

export default Skills;
