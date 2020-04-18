import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <Hero />
        <Projects />
        <BlogPosts />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
