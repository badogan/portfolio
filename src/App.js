import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";

function App() {
  return (
    <React.Fragment>
      {/* <div className='App'> */}
        <Hero />
        <Projects />
        <BlogPosts />
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
