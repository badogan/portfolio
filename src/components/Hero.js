import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

const Hero = () => {
  const content = HeroContent;
  const logos = content.logos;


  return (
    <React.Fragment>
      <header>
        <div className="hero-text-box">
          <h1>
            {content.name} | {content.title}
          </h1>
          <a className="btn btn-full" href="#projects">
            {content.button1Content}
          </a>
          <a className="btn btn-ghost" href="#blogposts">
            {content.button2Content}
          </a>
          {/* <h3>My Stack:</h3> */}
          <div className="logos-div">
            {Object.keys(logos).map((logokey,index) => 
              <h6 key={index}> <i className={logos[logokey]}></i></h6>
            )}
          </div>
        </div>
      </header>

    </React.Fragment>
  );
};

export default Hero;
