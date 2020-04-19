import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";
import ReactPlayer from "react-player";

const ProjectCard = props => {
  const {
    name,
    description,
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
            <h6 className='project-details-each-logo' key={index}>
              <i className={HeroContent.logos[stack]}></i>
            </h6>
          ))}
        </div>
        <div className="project-details-buttons">
          {liveSiteURL && <a
            className="btnProject btnProject-ghost"
            href={liveSiteURL}
            target="_blank"
          >
            Web
          </a>}
          {sourceCodeURL && <a
            className="btnProject btnProject-ghost"
            href={sourceCodeURL}
            target="_blank"
          >
            GitHub
          </a>}
        </div>
      </div>

      <div className="project-visuals">
        {/* <div className='player-wrapper'> */}
          <ReactPlayer  width='100%'
          height='100%' className='testing' url={demoVideoURL}/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
