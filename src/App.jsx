import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { Experiences } from "./components/Experiences"
import { Projects } from "./components/Projects"

import "./styles/global.css"

function App() {

  return (
    <>
        
      <About />
      <Navbar /> 

      <Experiences />
      <Projects />
    </>
   
  )
}

export default App
