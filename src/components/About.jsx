import React from "react";

import codingImg from "../assets/coding.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "../styles/about.css";

export function About() {
  return (
    <section id="about">

      <div className="mainContainer">
        <div className="titleContainer"><h1> <strong> About me</strong> </h1></div>

        <h1>
          Hi, i'm <strong>João Pedro</strong> <br /> a{" "}
          <strong>Web Developer</strong>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <div className="buttonContainer">
          <button>
            <a href="https://github.com/JPST-Developer" target="_blank">
              <FaGithub size={30} />
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-teixeira-ba893b186/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </button>
        </div>
      </div>

      <div className="imageContainer">
        <img src={codingImg} alt="" style={{ maxHeight: "500px" }} />
      </div>
    </section>
  );
}
