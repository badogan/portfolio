import React from "react";
import { Link } from "react-router-dom";
import { HeroContent } from "../APIsHelpers/HelperContent";

const Hero = () => {
  const { name, intro, tiles } = HeroContent;

  return (
    <header className="hub">
      <h1 className="hub-name">
        <Link to="/apps" className="hub-name-link">{name}</Link>
      </h1>
      <p className="hub-intro">{intro}</p>

      <nav className="hub-grid">
        {tiles.map((tile, index) =>
          tile.external ? (
            <a
              key={index}
              className="hub-tile hub-tile--external"
              href={tile.target}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tile.label}
            </a>
          ) : (
            <a key={index} className="hub-tile" href={tile.target}>
              {tile.label}
            </a>
          )
        )}
      </nav>
    </header>
  );
};

export default Hero;
