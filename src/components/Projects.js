import React from "react";
import { ProjectsContent } from "../APIsHelpers/HelperContent";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const content = ProjectsContent;

  return (
    <div id="projects" className="projects-main-div wrapper">
      <div className="projects-heading">
        <h2>PROJECTS</h2>
      </div>
      <div className="projects-projectcardsContainer">
        {content.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
