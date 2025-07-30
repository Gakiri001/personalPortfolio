import React, { useState } from "react";
import "./Portfolio.css";
import { GiSkills } from "react-icons/gi";
import portfolio from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";

function Portfolio() {
  const [selectedProject, setSelected] = useState([])
  const [searchparams, setSearchParams] = useSearchParams()

  const projects = []
  return (
    <div className="portfolio">
      <div className="portfolioHeader">
        <h2>Portfolio</h2>
        <GiSkills className="portfolioIcon" />
      </div>
      <div>
        <div>
          {/* <h2>Frontend</h2>
          <h2>Backend</h2>
          <h2>Full-stack Development</h2> */}
        </div>
           <section className="flex flex-wrap justify-center gap-4">
        {portfolio.map((index, i)=> (
          <Card key={i} className="w-[30%] card">
            <img className="w-[100%]" src={index.image} alt="" />
          </Card>
        ))}
      </section>
      </div>
    </div>
  );
}

export default Portfolio;
