import React from "react";
import { BlogpostsContent } from "../APIsHelpers/HelperContent";
import BlogpostCard from "./BlogpostCard";

const BlogPosts = () => {
  const content = BlogpostsContent;

  return (
    <div id="writing" className="blogposts-main-div wrapper">
      <div className="blogposts-heading">
        <h2>Writing</h2>
      </div>
      <div className="blogposts-blogpostcardsContainer">
        {content.map((blogpost, index) => (
          <BlogpostCard key={index} blogpost={blogpost} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
