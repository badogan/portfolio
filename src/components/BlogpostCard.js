import React from "react";

const BlogpostCard = props => {
  const { heading, description, url } = props.blogpost;
  return (
    <div className="blogpostcard-main-div wrapper">
      <div>{heading}</div>
      <div>{description}</div>
      <div>{url}</div>
    </div>
  );
};

export default BlogpostCard;
