import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

const Hero = () => {
  const content = HeroContent;
  const logos = content.logos;
  const stayintouchLogos = content.stayintouchLogos;

  return (
    <div className="hero-main-container wrapper2">
      <div className="hero-name-title">
        <h1>
          {content.name} {content.title}
        </h1>
      </div>

      <div className="hero-buttons">
        <a className="btn btn-full" href="#projects">
          {content.button1Content}
        </a>
        <a className="btn btn-ghost" href="#blogposts">
          {content.button2Content}
        </a>
      </div>

      <div className="hero-mystack">
        <h3>My stack:</h3>
        <div className="hero-logos-div">
          {Object.keys(logos).map((logokey, index) => (
            <h6 key={index}>
              {" "}
              <i className={logos[logokey]}></i>
            </h6>
          ))}
        </div>
      </div>
      <div className="hero-stayintouch">
        <h3>Stay in touch:</h3>

        <div className="hero-stayintouch-logos-div">
          {stayintouchLogos.map((stayintouchLogo, index) => (
            <h5 key={index}>
              <i
                className={stayintouchLogo.fontLink}
                onClick={() => window.open(`${stayintouchLogo.externalLink}`)}
              ></i>
            </h5>
          ))}
        </div>
      </div>
    </div>
    /* </header> */
    /* </div> */
    // </React.Fragment>
  );
};

export default Hero;
