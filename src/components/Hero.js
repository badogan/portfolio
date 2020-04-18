import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";
import Logo from "./Logo";

const Hero = () => {
  const content = HeroContent;
  return (
    <React.Fragment>
      <header>
        <div className="hero-text-box">
          <h1>
            {content.name} | {content.title}
          </h1>

          <a className="btn btn-full" href="#">
            {content.button1Content}
          </a>
          <a className="btn btn-ghost" href="#">
            {content.button2Content}
          </a>
          {/* <h3>My Stack:</h3> */}
          <div className="logos-div">
            {content.logos.map((logoClass,index) => (
              <h2 key={index}>
                <i
                  // style={{ display: "flex", width: "20%" }}
                  className={`${logoClass}`}
                ></i>
              </h2>
            ))}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Hero;
