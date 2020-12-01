//import react & css page
import React from "react";
import "./App.css";
//hobbies & fun facts page
function Hobbies() {
  return (
    //wrap everything in a div
    <div class="hobbies">
      {/* div for title to appear at the top */}
      <h1 id="hobbies-title">Hobbies & Fun Facts</h1>
      {/* first hobby card for sports with text content*/}
      <div id="bio-card">
        <h1>Sports</h1>
        {/* list for sports card */}
        <ul>
          <li>Basketball aficionado</li>
          <li>Life-long Minnesota Vikings fan</li>
          <li>Recent Manchester United fan</li>
          <li>MMA enthusiast</li>
        </ul>
      </div>
      {/* second hobby card with text content */}
      <div id="bio-card">
        <h1>Video Games</h1>
        {/* list for video game card */}
        <ul>
          <li>Life-long gamer</li>
          <li>Started with a Sega Genesis</li>
          <li>Owned almost every console made since the '00s</li>
          <li>
            Favorite games include Diablo II: Lord of Destruction, Legend of
            Dragoon, God of War, & Assassin's Creed
          </li>
          <li>
            Looking forward to playing the PS5 when it is one day back in stock
          </li>
        </ul>
      </div>
      {/* third hobby card with text content */}
      <div id="bio-card">
        <h1>Exercise</h1>
        {/* list for exercise card */}
        <ul>
          <li>Love to play basketball</li>
          <li>Favorite form of excercise is kickboxing</li>
          <li>Like to go kayaking in the summer months</li>
          <li>Never learned to ride a bike</li>
        </ul>
      </div>
      {/* fourth hobby card with text content */}
      <div id="bio-card">
        <h1>Reading</h1>
        {/* list for reading card */}
        <ul>
          <li>Huge comic book nerd</li>
          <li>Favorite Marvel comics: X-Men, Spider-Man, Venom, Thor</li>
          <li>Favorite DC comics: Batman, Flash, Green Lantern, Nightwing</li>
          <li>
            Favorite genres include fantasy, historical fiction, & biographies
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hobbies;
