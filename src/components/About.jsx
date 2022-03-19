import React from "react";

import astronautImg from "../assets/astronaut.png";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import "../styles/about.css";
import Link from "react-scroll/modules/components/Link";

export function About() {
  return (
    <section id="about">
      <div className="mainContainer">
        <div className="titleContainer">
          <h1>
            {" "}
            <strong> About me </strong>{" "}
          </h1>
        </div>

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
          <button className="btnGit">
            <a href="https://github.com/JPST-Developer" target="_blank">
              <FaGithub size={30} />
            </a>
          </button>
          <button className="btnLinkedin">
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-teixeira-ba893b186/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </button>
        </div>

        <Link
          to="experiences"
          spy={true}
          smooth={true}
          duration={500}
          className="button"
        >
          <button className="btn-navigate">
            View my work <FaArrowRight className="iconArrow" size={20} />
          </button>
        </Link>
      </div>

      <div className="imageContainer">
        <img src={astronautImg} alt="" style={{ maxHeight: "500px" }} />
      </div>
    </section>
  );
}
