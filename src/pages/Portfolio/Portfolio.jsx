import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { GiSkills } from "react-icons/gi";
import portfolio from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  const categories = [...new Set(portfolio.map((project) => project.category))];
  const [selectedProject, setSelectedProject] = useState([]);
  const [searchparams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  console.log("projects", portfolio);

  console.log("project->", categories);

  const handleProjectSelect = (project) => {
    setSelectedProject((prev) =>
      prev.includes(project)
        ? prev.filter((p) => p !== project)
        : [...prev, project],
    );
  };

  useEffect(() => {
    if (selectedProject.length > 0) {
      const query = new URLSearchParams({ project: selectedProject.join(",") });
      setSearchParams(query);
    } else {
      setSearchParams({});
    }
  }, [selectedProject, setSearchParams]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading delay
  }, []);

  const filteredPortfolio =
    selectedProject.length === 0
      ? portfolio
      : portfolio.filter((project) =>
          selectedProject.includes(project.category),
        );

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="portfolio">
          <div className="portfolioHeader">
            <h2>Portfolio</h2>
            <GiSkills className="portfolioIcon" />
          </div>
          <div>
            <div className="divCategory">
              {categories.map((project) => (
                <Label key={project} className="labelCategory">
                  <Checkbox
                    className="inputCategory"
                    checked={selectedProject.includes(project)}
                    onCheckedChange={() => handleProjectSelect(project)}
                  />
                  <span>{project}</span>
                </Label>
              ))}
            </div>
            <section className="flex flex-wrap justify-center gap-4  projects">
              {filteredPortfolio.map((index, i) => (
                <div key={i} className="w-[40%] card">
                  <img className="w-[100%]" src={index.image} alt="" />
                  <div className="divLinks">
                    {index.liveLink && (
                      <a
                        href={index.liveLink}
                        target="_blank"
                        className="flex text-[15px] gap-1 text-gray-500"
                      >
                        <span>
                          <FaExternalLinkAlt />
                        </span>
                        Live Link
                      </a>
                    )}
                    {index.gitHubLink && (
                      <a
                        href={index.gitHubLink}
                        target="_blank"
                        className="flex text-[15px] gap-1 text-gray-500"
                      >
                        <span>
                          <FaExternalLinkAlt />
                        </span>
                        GitHub Link
                      </a>
                    )}
                  </div>
                  <div className="divcontent">
                    <h2 className="text-2xl mb-2">{index.projectName}</h2>
                    <p className="text-[15px]">{index.description}</p>
                  </div>
                  <div className="divTechs">
                    {index.tech1 && <p>{index.tech1}</p>}
                    {index.tech2 && <p>{index.tech2}</p>}
                    {index.tech3 && <p>{index.tech3}</p>}
                    {index.tech4 && <p>{index.tech4}</p>}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
