import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Octokit } from "octokit";

function Overview() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit({
        auth: `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`,
      });

      const {
        data: { login },
      } = await octokit.rest.users.getAuthenticated();

      const repos = await octokit.request("GET /users/{username}/repos", {
        username: login,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      setItems(repos.data);
      console.log(repos);
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
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            html_url={item.html_url}
            name={item.name}
            visibility={item.visibility}
            language={item.language}
          />
        ))}
      </div>
    </div>
  );
}

export default Overview;
