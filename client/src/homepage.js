//import react & css page
import React from "react";
import "./App.css";
//correct way to import images from local files
import PortfolioPic from "./images/PortfolioPic.jpg";

//home page
function Homepage() {
  return (
    //wrapper for entire homepage
    <div class="homepage">
      {/* div for title to appear at the top */}
      <h1 id="home-title">My Portfolio</h1>
      {/* single card on this page with photo and text content */}
      <div id="bio-card">
        <h1>Dakota Faye</h1>
        {/* bringing in imported photo from local file */}
        <img id="photo" src={PortfolioPic} alt="my photo" />
        {/* text content underneath image */}
        <p>Born: Rutland, Vermont</p>
        <p>Birthday: February 12, 1992</p>
        <p>Strengths: Problem Solving, Adaptability, Quick Learner</p>
        <p>Weaknesses: Slight Introvert, Stubborn</p>
      </div>
    </div>
  );
}

export default Homepage;
