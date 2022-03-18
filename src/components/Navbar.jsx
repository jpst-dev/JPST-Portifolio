import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-scroll";

import "../styles/navbar.css";

export function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 700) && (
        <ul className="list">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            className="items"
          >
            <a href="#about">About</a>
          </Link>
          <Link
            to="experiences"
            spy={true}
            smooth={true}
            duration={500}
            className="items"
          >
            <a href="#experiences">Experiences</a>
          </Link>
          
          <Link className="items">
            <a href="#projects">Projects</a>
          </Link>
          <Link className="items">
            <a href="#contact">Contact</a>
          </Link>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        <FiMenu size={30} />
      </button>
    </nav>
  );
}
