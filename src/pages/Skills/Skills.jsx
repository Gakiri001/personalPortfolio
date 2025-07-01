import React from "react";
import { GiSkills } from "react-icons/gi";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skillsHeader">
        <h2>Skills</h2>
        <GiSkills className="skillIcon" />
      </div>
      <section>
        <div className="fullstack">
          <h2>Full-stack skills</h2>
          <div className="fullstackDetails">
            <div className="frontend">
              <h3>Front-end Technologies</h3>
              <div>
                <p>HTML/CSS</p>
                <div className="skillbg">
                  <div className="w-[90%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>JavaScript</p>
                <div className="skillbg">
                  <div className="w-[80%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>React</p>
                <div className="skillbg">
                  <div className="w-[80%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Angular</p>
                <div className="skillbg">
                  <div className="w-[60%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Tailwind CSS</p>
                <div className="skillbg">
                  <div className="w-[70%] skillonTopDiv"></div>
                </div>
              </div>
            </div>
            <div className="frontend">
              <h3>Back-end Technologies</h3>
              <div>
                <p>Node.js</p>
                <div className="skillbg">
                  <div className="w-[80%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Express.js</p>
                <div className="skillbg">
                  <div className="w-[70%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Python</p>
                <div className="skillbg">
                  <div className="w-[60%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Django</p>
                <div className="skillbg">
                  <div className="w-[50%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Laravel(PHP)</p>
                <div className="skillbg">
                  <div className="w-[60%] skillonTopDiv"></div>
                </div>
              </div>
            </div>
            <div className="frontend">
              <h3>Database</h3>
              <div>
                <p>MySQL</p>
                <div className="skillbg">
                  <div className="w-[70%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>PostgreSQL</p>
                <div className="skillbg">
                  <div className="w-[80%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>MongoDB</p>
                <div className="skillbg">
                  <div className="w-[80%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Prisma ORM</p>
                <div className="skillbg">
                  <div className="w-[80%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Mongoose</p>
                <div className="skillbg">
                  <div className="w-[70%] skillonTopDiv"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accountant">
          <h2>Accountant (CPA)</h2>
          <div className="fullstackDetails">
            <div className="frontend">
              <div>
                <p>Financial Reporting & Analysis</p>
                <div className="skillbg">
                  <div className="w-[80%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Accounting Software Proficiency</p>
                <div className="skillbg">
                  <div className="w-[60%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Taxation</p>
                <div className="skillbg">
                  <div className="w-[50%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Auditing</p>
                <div className="skillbg">
                  <div className="w-[60%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Budgeting and Forecasting</p>
                <div className="skillbg">
                  <div className="w-[50%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>GAAP / IFRS</p>
                <div className="skillbg">
                  <div className="w-[70%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Payroll & Accounts Management</p>
                <div className="skillbg">
                  <div className="w-[50%] skillonTopDiv"></div>
                </div>
              </div>
              <div>
                <p>Data Analysis & Reconciliation</p>
                <div className="skillbg">
                  <div className="w-[60%] skillonTopDiv"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
