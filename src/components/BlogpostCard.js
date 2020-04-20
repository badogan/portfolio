import React from "react";

const BlogpostCard = props => {
  const { heading, description, url } = props.blogpost;
  return (
    <div className="blogpostcard-main-div wrapper">
      <div className="blogpost-details-name">{heading}</div>

      <div className="blogpost-details-description">{description}</div>

      <div className="blogpost-details-buttons">
        {url && (
          <a className="btnProject btnProject-ghost" href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogpostCard;
