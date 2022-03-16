import React, {  useState, useEffect  } from "react";
import { FiMenu } from "react-icons/fi"

import "../styles/navbar.css";

export function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
    
      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
      }, [])
    
      
  return (
      
    <nav>
        {
          (toggleMenu || screenWidth > 700) && (
            <ul className="list">
              <li className="items"><a href="#about">About</a></li>            
              <li className="items"><a href="#experiences">Experiences</a></li>
              <li className="items"><a href="#projects">Projects</a></li>
              <li className="items"><a href="#contact">Contact</a></li>
            </ul>
          )
      }
     
      <button onClick={toggleNav} className="btn"><FiMenu size={30} /></button>
    </nav>
  );
}
