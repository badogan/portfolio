import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";
import Logo from './Logo'

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
          <h3>My Stack:</h3>
          <div className='logos-div'>
            <h4 className="logos-each">TEST-1</h4>
            <h4 className="logos-each">TEST-2</h4>
            <h4 className="logos-each">TEST-3</h4>
            <h4 className="logos-each">TEST-4</h4>
            <h4 className="logos-each">TEST-5</h4>
            <h4 className="logos-each">TEST-6</h4>
            <h4 className="logos-each">TEST-7</h4>
            <h4 className="logos-each">TEST-8</h4>
            <h4 className="logos-each">TEST-9</h4>
            <h4 className="logos-each">TEST-10</h4>
            <h4 className="logos-each">TEST-11</h4>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Hero;
