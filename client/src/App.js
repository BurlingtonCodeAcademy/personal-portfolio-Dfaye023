import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './navbar.js';
import Projects from './projects.js';
import Homepage from './homepage.js';
import Work from './work.js';
import Hobbies from './hobbies.js';
import About from './about.js';
import Footer from './footer.js';
//import all .js pages

function App() {

  return ( //import page links into navbar & footer. all accessible on all pages
    <Router>
      <div class="Navbar">
        <Link to='./homepage.js'>Home Page</Link>
        <Link to='./work.js'>Work</Link>
        <Link to='./about.js'>About</Link>
        <Link to='./projects.js'>Projects</Link>
        <Link to='./hobbies.js'>Hobbies</Link>
      </div>
      <Switch> 
        <Route exact path="/homepage.js">
          <Homepage />
        </Route>
        <Route path="/work.js">
          <Work />
        </Route>
        <Route path="/about.js">
          <About />
        </Route>
        <Route path="/projects.js">
          <Projects />
        </Route>
        <Route path='/hobbies.js'>
          <Hobbies />
        </Route>
      </Switch>
      <div class='footer'>
        <Link to='./homepage.js'>Home Page</Link>
        <Link to='./work.js'>Work</Link>
        <Link to='./about.js'>About</Link>
        <Link to='./projects.js'>Projects</Link>
        <Link to='./hobbies.js'>Hobbies</Link>
      </div>
    </Router>
  );
}
export default App;
