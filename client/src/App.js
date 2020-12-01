//import react, css page, and Router/Switch/Route from react router
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
//import all .js pages
import Projects from "./projects.js";
import Homepage from "./homepage.js";
import Work from "./work.js";
import Hobbies from "./hobbies.js";
import About from "./about.js";
//import menu icon for navbar
import { MdMenu } from "react-icons/md";
function App() {
  return (
    //import page links into navbar. all accessible on all pages
    <Router>
      {/* navbar div */}
      <nav>
        {/* bring in menu icon that was imported */}
        <MdMenu id="burger" />
        <div id="menu">
          <a>
            {/* navbar link to the homepage */}
            <Link to="/">Home Page</Link>
          </a>
          <a>
            {/* navbar link to work history page */}
            <Link to="/work">Work History</Link>
          </a>
          <a>
            {/* navbar link to project page */}
            <Link to="/projects">Projects</Link>
          </a>
          <a>
            {/* navbar link to about me page */}
            <Link to="/about">About</Link>
          </a>
          <a>
            {/* navbar link to hobbies & fun facts page */}
            <Link to="/hobbies">Hobbies</Link>
          </a>
        </div>
      </nav>
      <Switch>
        {/* route to home page on initial page load */}
        <Route exact path="/">
          <Homepage />
        </Route>
        {/* route to work history page */}
        <Route path="/work">
          <Work />
        </Route>
        {/* route to about me page */}
        <Route path="/about">
          <About />
        </Route>
        {/* route to projects page */}
        <Route path="/projects">
          <Projects />
        </Route>
        {/* route to hobbies & fun facts page */}
        <Route path="/hobbies">
          <Hobbies />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
