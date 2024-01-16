import React from 'react'
import {useState} from "react"
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
     <div id="navbar">
      <div className="logo">
        <p>Kainat</p>
        </div>
       <ul className="nav-container">
       <li className="nav-links"><a href="#" className="a">Home</a></li>
        <li className="nav-links"><a href="#about-section" className="a">About</a></li>
        <li className="nav-links"><a href="#Projects-section" className="a">Projects</a></li>
        <li className="nav-links"><a href="#" className="a">Resume</a></li>
        <li className="nav-links"><a href="#Contact-section" className="a">Contact</a></li>
       </ul>

       <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
       <div className="hamburger-icon">
        <i className="fa-solid fa-bars" ></i>
        </div>

        <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div className="hamburger-menu" variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden">
        <div className="mobile-links" >
          <a href="#about-section" className="a" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#Projects-section" className="a" onClick={closeMobileMenu}>
            Projects
          </a>
          <a href="#" className="a" onClick={closeMobileMenu}>
            Resume
          </a>
          <a href="#Contact-section" className="a" onClick={closeMobileMenu}>
            Contact
          </a>
        </div>
        <div className="social-icons">
         <a href="www.linkedin.com/in/kainat-farooq-6097b21b3" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
         <a href="https://twitter.com/KainatFarooq20" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
         <a href="https://github.com/Kainat18" target="_blank">  <i className="fa-brands fa-square-github"></i></a>
        </div> 
        </motion.div>
    )}
   </AnimatePresence>
    </div>
      </div>
  )
}

export default Navbar
