import React from "react";
import { HeroContent } from "../APIsHelpers/HelperContent";

const openLink = url => {
  // mailto:/tel: must navigate, not open a blank tab that immediately closes
  if (/^(mailto:|tel:)/.test(url)) {
    window.location.href = url;
  } else {
    window.open(url);
  }
};

const Contact = () => {
  const { stayintouchLogos } = HeroContent;

  return (
    <footer id="contact" className="contact-footer">
      <div className="contact-links">
        {stayintouchLogos.map((link, index) => (
          <i
            key={index}
            className={link.fontLink}
            onClick={() => openLink(link.externalLink)}
          ></i>
        ))}
      </div>
    </footer>
  );
};

export default Contact;
