import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <BlogPosts />
      <Contact />
    </React.Fragment>
  );
}

export default App;
