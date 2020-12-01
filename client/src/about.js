//import react & css page
import React from "react";
import "./App.css";
//import portfolio pic image
import PortfolioPic from "./images/PortfolioPic.jpg";

//about me page
function About() {
  return (
    //all cards in one div
    <div class="about">
      {/* div for the title to appear at the top */}
      <h1 id="about-title">About Me</h1>
      {/* first education card with text content */}
      <div id="bio-card">
        <h1>Education</h1>
        <h2>Burlington Code Academy</h2>
        <h3>Full-Stack Software Development</h3>
        <p>
          Spent 12 weeks(450+ hours) learning these skills:
          <br></br>
          CSS<br></br>JavaScript<br></br>HTML<br></br>MongoDB<br></br>WebAPI
          <br></br>React<br></br>Node.js<br></br>Git<br></br>GitHub<br></br>
          Agile<br></br>Jira<br></br>Miro<br></br>Trello
        </p>
      </div>
      {/* second education card with text content */}
      <div id="bio-card">
        <h1>Education Contd.</h1>
        <h2>College of St. Joseph</h2>
        <h3>Business Admin/Sports Management Coursework</h3>
        <p>
          3.5 GPA Average<br></br>Business Club President<br></br>Student
          Government President<br></br>Volunteer Men's College Basketball Coach
        </p>
      </div>
      {/* volunteer work card with text content */}
      <div id="bio-card">
        <h1>Volunteer Work</h1>
        <p>
          Men's College Basketball Coach(NAIA DII)<br></br>Grade 5 Boy's
          Basketball Coach<br></br>Summer Camp Counselor
        </p>
      </div>
      {/* contact me card with a photo, text content, and a link to personal linkedin page */}
      <div id="bio-card">
        <h1>Contact Me</h1>
        {/* photo on card */}
        <img id="photo" src={PortfolioPic} alt="my photo" />
        <p id="contact-card">
          Phone: (802)345-6710<br></br>Email: ArthurVF7@gmail.com<br></br>
          {/* link to personal linkedin page */}
          <a id="linkedin" href="https://www.linkedin.com/in/victor-arthur/">
            LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
