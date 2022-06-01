import React from 'react';

import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { Experiences } from "./components/Experiences"
import { Projects } from "./components/Projects"
import { WhoIAm } from "./components/WhoIAm"
 
import "./styles/global.css"

function App() {

  return (
    <>
        
      <About />
      <Navbar /> 
      <WhoIAm />
      <Experiences />
      <Projects />
    </>
   
  )
}

export default App
