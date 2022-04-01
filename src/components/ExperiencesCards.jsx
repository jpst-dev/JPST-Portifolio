import React from "react";

import P from "prop-types";

import "../styles/experiencesCards.css";

ExperiencesCards.propTypes = {
  title: P.string.isRequired,
  icon: P.string,
  icon2: P.string,
  icon3: P.string,
};

export function ExperiencesCards(props) {
  return (
    <div id="cards">
      <div className="experienceCard">
        <a href="">
          {props.icon} {props.icon2} {props.icon3}
        </a>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  );
}
