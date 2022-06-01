import React from "react";

import "../styles/experiences.css";

export function Experiences() {
  return (
    <section id="experiences">
      <h1>
        <strong>Experiences</strong>
      </h1>
     
        <div id="skills-wrapper">
          <div className="skill">
            <div className="content">
              <span>90%</span>
              <span>HTML</span>
            </div>
          </div>
          <div className="skill">
            <div className="content">
              <span>90%</span>
              <span>CSS</span>
            </div>
          </div>
          <div className="skill">
            <div className="content">
              <span>85%</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className="skill">
            <div className="content">
              <span>80%</span>
              <span>ReactJS</span>
            </div>
          </div>
          <div className="skill">
            <div className="content">
              <span>70%</span>
              <span>Styled<br/>Components</span>
            </div>
          </div>
        </div>
      
    </section>
  );
}
