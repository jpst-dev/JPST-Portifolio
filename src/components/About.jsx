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
          Hi, i&apos;m <strong>João Pedro</strong> <br /> a <strong>Web Developer</strong>{" "}
        </h1>
        <p>
          I&apos;m a front-end student, with a passion for everything front-end. Welcome to my corner of the internet. I&apos;m glad you&apos;re here!{" "}
        </p>

        <div id="buttonContainer">
          <div className="buttonContainer">
            <a className="" href="https://github.com/JPST-Developer" target="_blank" rel="noreferrer">
              <button className="btnGit">
                {" "}
                <FaGithub size={30} />{" "}
              </button>
            </a>
          </div>

          <div className="buttonContainer">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-teixeira-ba893b186/" target="_blank" rel="noreferrer">
              <button className="btnLinkedin">
                <FaLinkedin size={30} />{" "}
              </button>
            </a>
          </div>
        </div>

        <Link to="whoIAm" spy={true} smooth={true} duration={500} className="button">
          <button className="btn-navigate">
            Quem sou eu? <FaArrowRight className="iconArrow" size={20} />
          </button>
        </Link>
      </div>

      <div className="imageContainer">
        <img src={astronautImg} alt="" style={{ maxHeight: "500px" }} />
      </div>
    </section>
  );
}
