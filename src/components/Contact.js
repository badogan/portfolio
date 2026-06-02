import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

const Contact = () => {
  const { stayintouchLogos } = HeroContent;

  return (
    <footer id="contact" className="contact-footer">
      <div className="contact-links">
        {stayintouchLogos.map((link, index) => (
          <i
            key={index}
            className={link.fontLink}
            onClick={() => window.open(link.externalLink)}
          ></i>
        ))}
      </div>
    </footer>
  );
};

export default Contact;
