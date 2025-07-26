import React from "react";
import { FaBlackTie } from "react-icons/fa";
import "./Resume.css";
import { FaBriefcase } from "react-icons/fa";
import experience from "../../data/resume";
import education from "../../data/education";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Resume() {
  return (
    <div className="resume">
      <div className="resumeHeader">
        <h2>Resume</h2>
        <FaBlackTie className="resumeicon" />
      </div>
      <section className="sectionResume">
        <Card className="divExperience">
          <CardHeader>
            <CardTitle className="CardTitle">Experience</CardTitle>
          </CardHeader>
          <CardContent className="ExperienceContent">
            {experience.map((index, i) => (
              <Card className="cardExperienceSpecific" key={i}>
                <div className="divIcons">
                  <div>
                    {" "}
                    <FaBriefcase className="icon" />
                  </div>
                  <div>
                    {" "}
                    <FaBriefcase className="icon" />
                  </div>
                </div>
                <h3 className="ExperienceStation">{index.station}</h3>
                <h4 className="ExperienceTitle">Title: {index.title}</h4>
                <p>
                  {index.from} - {index.to}
                </p>
                <p className="italic underline">Role and Responsibilities:</p>
                <ul className="unorderedList">
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
              </Card>
            ))}
          </CardContent>
        </Card>
        <Card className="divEducation">
          <CardHeader>
            <CardTitle className="CardTitle">Education</CardTitle>
          </CardHeader>
          <CardContent className="EducationContent">
            {education.map((eduIndex, i) => (
              <Card key={i} className="cardEducation">
                <div className="divIcons">
                  <div>
                    <FaBriefcase className="icon" />
                  </div>
                  <div>
                    <FaBriefcase className="icon" />
                  </div>
                </div>
                <h3>{eduIndex.school}</h3>
                <p>{eduIndex.course}</p>
                <p>
                  {eduIndex.from} - {eduIndex.to}
                </p>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Resume;
