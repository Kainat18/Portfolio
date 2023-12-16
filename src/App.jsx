import React from "react"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {
  return (
    <>
    <Navbar />
    <Homepage/>
    <About />
    <Projects />
    <Contact/>
    <Footer />
    
    </>
  )
}

export default App;