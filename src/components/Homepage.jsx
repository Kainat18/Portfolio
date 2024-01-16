import React from 'react';
import {motion} from 'framer-motion'

function Homepage() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 1 },
  };
  return (
    <motion.div 
    id="homepage"
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
    transition={{ duration: 4 }}
    >
     <div className="homepage-bg"></div>
     <div className="homepage-description">
     <h1 className="intro">Hello, I'm Kainat Farooq</h1>
     <h4>A Front End Developer </h4>
     <p className= "intro-quote">Unlocking the Web's Wonders, One Project at a Time</p>
     </div> 
     <div className="homepage-btns">
      <motion.button 
       className="home-btn work"
       variants={buttonVariants}
       whileHover="hover"
       whileTap="tap"
      >
        <a href="#Projects-section">View my work »</a> 
      </motion.button>
      <motion.button 
       className="home-btn contact"
       variants={buttonVariants}
       whileHover="hover"
       whileTap="tap"
      >
        <a href="#Contact-section">Contact me</a>
      </motion.button>
    </div>
    </motion.div>
  )
}

export default Homepage
