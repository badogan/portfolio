import React from "react";
import { ProjectsContent } from "../APIsHelpers/HelperContent";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const content = ProjectsContent;

  return (
    <div className="projects-main-div wrapper">
      <div className="projects-heading">
        <h2 id='projects'>PROJECTS</h2>
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
