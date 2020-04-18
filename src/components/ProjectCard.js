import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

const ProjectCard = props => {
  const {
    name,
    description,
    imageURL,
    demoVideoURL,
    sourceCodeURL,
    liveSiteURL,
    stackUsed
  } = props.project;
  return (
    <div className="projectcard-main-div wrapper">
      <div className="project-details">
        <h3 className="project-details-name"> {name}</h3>
        <h4 className="project-details-description"> {description}</h4>
        <div className="project-details-logos">
          {stackUsed.map((stack, index) => (
            <h6 key={index}>
              <i className={HeroContent.logos[stack]}></i>
            </h6>
          ))}
        </div>
        <div className="project-details-buttons">
        <a className="btn btn-ghost" href={liveSiteURL} target="_blank">
            Live Site
          </a>
          <a className="btn btn-ghost" href={demoVideoURL} target="_blank">
            Demo Video
          </a>
          <a className="btn btn-ghost" href={sourceCodeURL} target="_blank">
            Source Code
          </a>
          
        </div>
      </div>

      <div className="project-visuals">
        <div>
          <img src="https://images.unsplash.com/photo-1464788061904-b026adb5422b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
