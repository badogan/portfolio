import React from "react";
import { Link } from "react-router-dom";
import { AppsContent } from "../APIsHelpers/HelperContent";

const AppLauncher = () => (
  <div className="launcher">
    <Link to="/" className="launcher-back">← Back</Link>
    <ul className="launcher-list">
      {AppsContent.map(app => (
        <li key={app.name}>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="launcher-link"
          >
            {app.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default AppLauncher;
