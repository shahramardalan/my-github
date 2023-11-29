import React from "react";

function ProjectCard() {
  return (
    <div>
      <div className="rounded-lg p-4 border-2">
        <div className="flex justify-between">
          <a
            href="#"
            className="mb-6 font-semibold text-blue-500 text-sm hover:underline"
          >
            Lorem, ipsum dolor.
          </a>
          <p className="border-2 rounded-xl h-1/2 px-2 leading-6">public</p>
        </div>
        <div className="flex justify-left items-center">
          <span className="mr-2 h-3 w-3 bg-yellow-300 rounded-full"></span>
          <p>Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
