import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { GiSkills } from "react-icons/gi";
import portfolio from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

// const Projects = ({
//   image,
//   category,
//   liveLink,
//   gitHubLink,
// }) => {
//   return(
//     <div>
//     <img src={image} alt="A picture for the particular project" />
//     <div>
//       {

//       }
//     </div>
//     </div>
//   )
// }

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
    }, 2000); // Simulate loading delay
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
        <h1 className="loading">Please wait as we load the page content...</h1>
      ) : (
        <div className="portfolio">
          <div className="portfolioHeader">
            <h2>Portfolio</h2>
            <GiSkills className="portfolioIcon" />
          </div>
          <div>
            <div>
              {categories.map((project) => (
                <label key={project}>
                  <input
                    type="checkbox"
                    value="all"
                    checked={selectedProject.includes(project)}
                    onChange={() => handleProjectSelect(project)}
                  />
                  <span>{project}</span>
                </label>
              ))}
            </div>
            <section className="flex flex-wrap justify-center gap-4  projects">
              {filteredPortfolio.map((index, i) => (
                <Card key={i} className="w-[30%] card">
                  <img className="w-[100%]" src={index.image} alt="" />
                  <div>
                    {index.liveLink && (
                      <a href={index.liveLink}>Live Link</a>
                    )}
                    {index.gitHubLink && (
                      <a href={index.gitHubLink}>GitHub Link</a>
                    )}
                  </div>
                </Card>
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
