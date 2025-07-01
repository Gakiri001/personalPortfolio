import React from "react";
import { FaBlackTie } from "react-icons/fa";
import "./Resume.css";
import { FaBriefcase } from 'react-icons/fa';
import experience from "../../data/resume";
import education from "../../data/education";

function Resume() {
  return (
    <div className="resume">
      <div className="resumeHeader">
        <h2>Resume</h2>
        <FaBlackTie className="resumeicon" />
      </div>
      <section>
        <div>
          <h3>Experience</h3>
              <div>
                {experience.map((index, i) => (
                  <div key={i}>
                    <div><FaBriefcase/></div>
                    <h3>{index.station}</h3>
                    <h4>Title: {index.title}</h4>
                    <p>{index.from} - {index.to}</p>
                    <ul>
                      <li>{index.role1}</li>
                      <li>{index.role2}</li>
                      <li>{index.role3}</li>
                      <li>{index.role4}</li>
                      <li>{index.role5}</li>
                      <li>{index.role6}</li>
                      <li>{index.role7}</li>
                      <li>{index.role8}</li>
                      <li>{index.role9}</li>
                    </ul>
                  </div>
                ))}                
              </div>
        </div>
        <div>
          <h3>Education</h3>
          <div>
            {education.map((eduIndex, i) =>(
              <div key={i}>
                <div><FaBriefcase/></div>
                <h3>{eduIndex.school}</h3>
                <p>{eduIndex.course}</p>
                <p>{eduIndex.from} - {eduIndex.to}</p>
              </div>
            ))

            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
