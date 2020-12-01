//import react & css page
import React from "react";
import "./App.css";
//importing project images
import Guess from "./images/Guess.jpg";
import Remock from "./images/Remock.jpg";
import TicTacToe from "./images/Tic-Tac-Toe.jpg";
import Yelpington from "./images/Yelpington.jpg";
import Zorkington from "./images/Zork.jpg";

//projects page
function Projects() {
  return (
    //wrap entire page in div
    <div class="projects">
      {/* title for projects page, to sit at top */}
      <h1 id="projects-title">
        Projects
        {/* link to personal github account underneath page title */}
        <a id="git-profile" href="https://github.com/Dfaye023?tab=repositories">
          Link to GitHub Repository GitHub User: Dfaye023
        </a>
      </h1>
      {/* card for guess the number project, wrapped entire card in <a> tag to make whole card a clickable link */}
      <a
        id="bio-card"
        href="https://github.com/BurlingtonCodeAcademy/guess-the-number-Dfaye023.git"
      >
        <h1>Guess The Number Game</h1>
        {/* bring imported image in */}
        <img id="photo" src={Guess} alt="Guess The Number" />
        <p>
          A terminal based guess the number game, where you choose a number &
          the computer tries to guess it.
        </p>
      </a>
      {/* card for remock project, wrapped entire card in <a> tag to make whole card a clickable link */}
      <a
        id="bio-card"
        href="https://github.com/BurlingtonCodeAcademy/remock-Dfaye023.git"
      >
        <h1>Remock Project</h1>
        {/* bring imported image in */}
        <img id="photo" src={Remock} alt="Remock Project" />
        <p>A project that remocks a template website using HTML & CSS</p>
      </a>
      {/* card for tic-tac-toe project, wrapped entire card in <a> tag to make whole card a clickable link */}
      <a
        id="bio-card"
        href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-hope-dakota.git"
      >
        <h1>Tic-Tac-Toe</h1>
        {/* bring imported image in */}
        <img id="photo" src={TicTacToe} alt="Tic-Tac-Toe Game" />
        <p>A simple command-line, terminal UI tic-tac-toe game</p>
      </a>
      {/* card for zorkington project, wrapped entire card in <a> tag to make whole card a clickable link */}
      <a
        id="bio-card"
        href="https://github.com/BurlingtonCodeAcademy/zorkington-dakota-todd.git"
      >
        <h1>Zorkington Text Adventure Game</h1>
        {/* bring imported image in */}
        <img id="photo" src={Zorkington} alt="Zorkington Project" />
        <p>A text adventure game made in JavaScript</p>
      </a>
      {/* card for yelpington project, wrapped entire card in <a> tag to make whole card a clickable link */}
      <a
        id="bio-card"
        href="https://github.com/BurlingtonCodeAcademy/yelpington-Dfaye023.git"
      >
        <h1>Yelpington</h1>
        {/* bring imported image in */}
        <img id="photo" src={Yelpington} alt="Yelpington Project" />
        <p>
          A website modeled after Yelp to find my favorite restaurants in my
          area
        </p>
      </a>
      {/* card for capstone project, wrapped entire card in <a> tag to make whole card a clickable link */}
      {/* under construction */}
      <a id="bio-card">
        <h1>Capstone Project</h1>
        <p>Coming Soon!</p>
      </a>
    </div>
  );
}

export default Projects;
