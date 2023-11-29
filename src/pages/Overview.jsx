import React from "react";
import ProjectCard from "../components/ProjectCard";

function Overview() {
  return (
    <div className="container">
      <div className="flex justify-between mb-2 px-2">
        <div className="">
          <span>Popular repositories</span>
        </div>
        <div>
          <a href="#" className="text-blue-600">
            Costumize your pins
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Overview;
