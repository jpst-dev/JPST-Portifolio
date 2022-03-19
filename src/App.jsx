import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { Experiences } from "./components/Experiences"

import "./styles/global.css"

import { Link } from "react-scroll"

function App() {

  return (
    <>
        
      <About />
      <Navbar /> 

      <Experiences />
      <Experiences />
    </>
   
  )
}

export default App
