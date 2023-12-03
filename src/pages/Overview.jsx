import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Octokit } from "octokit";

function Overview() {
  const [items, setItems] = useState([]);
  const [users] = useState("shahramardalan");

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${users}/repos?page=1&per_page=10&sort=updated`
      );
      const data = await res.json();
      setItems(data);
    };

    fetchRepos();
  }, []);

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
        <h1>{items.length}</h1>
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
