//import react & css page
import React from "react";
import "./App.css";

function Work() {
  return (
    // all cards wrapped in a div
    <div class="work-page">
      {/* title to be displayed at top of page */}
      <h1 id="work-title">Work History</h1>
      {/* first work history card with text content */}
      <div id="bio-card">
        <h1>Replicarz</h1>
        <h2>Feb 2017 - June 2020</h2>
        <h3>Head of eCommerce</h3>
        <p>
          Working closely with the company Vice President, purchased models from
          secondhand sellers. Organized, inspected, repaired, cleaned,
          photographed and listed inventory on eBay to be sold at auction.
          Processed orders using MOM (Multichannel Ordering Manager), packaged
          and shipped all sold items, trained staff, and resolved any customer
          complaints.
        </p>
      </div>
      {/* second work history card with text content */}
      <div id="bio-card">
        <h1>AAA Northern New England</h1>
        <h2>Oct 2015 - Feb 2017</h2>
        <h3>Licensed Insurance Sales Agent</h3>
        <p>
          Generated prospective insurance policy sales through in-person, cold
          calls, and email outreach and maintained and adjusted policies as
          necessary.
        </p>
      </div>
      {/* third work history card with text content */}
      <div id="bio-card">
        <h1>Pickle Barrel Nightclub/Jax Food & Games</h1>
        <h2>Oct 2013 - June 2015</h2>
        <h3>Bouncer/Host/Server</h3>
        <p>
          Primarily worked as a bouncer at first, tasked with keeping order in
          an informed and polite fashion. Responsible for checking
          identification at door and monitoring the entirety of the nightclub
          for threats to safety and adherence to state laws. Role grew to
          include waiting tables, opening and closing both venues, and driving
          company van for intoxicated patrons at the end of the night.
        </p>
      </div>
      {/* fourth work history card with text content */}
      <div id="bio-card">
        <h1>Baker Distributing Co.</h1>
        <h2>May 2014 - Oct 2015</h2>
        <h3>Beverage Distributor</h3>
        <p>
          Collaborated with warehouse manager to plan special orders and driving
          routes. Interacted with store managers for payments as well as the
          storing and displaying of product.
        </p>
      </div>
      {/* fifth work history card with text content */}
      <div id="bio-card">
        <h1>Fairfield Auto Group</h1>
        <h2>May 2012 - Sep 2013</h2>
        <h3>Social Media Photographer</h3>
        <p>
          Photographed all vehicles, uploaded photos to the company website, and
          listed used inventory on Craigslist. Communicated with multiple
          department heads and sales agents on a daily basis to gain access to
          vehicles and trained incoming employees to work at neighboring
          dealerships.
        </p>
      </div>
    </div>
  );
}

export default Work;
