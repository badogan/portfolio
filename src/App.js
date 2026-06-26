import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BlogPosts from "./components/BlogPosts";
import Contact from "./components/Contact";
import AppLauncher from "./components/AppLauncher";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/apps" component={AppLauncher} />
        <Route path="/">
          <React.Fragment>
            <Hero />
            <Projects />
            <BlogPosts />
            <Contact />
          </React.Fragment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
