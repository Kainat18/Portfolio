import React from 'react'
import {motion} from 'framer-motion'

function About() {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 1 },
  };
return (
 <div id="about-section">
    <h2 className="about-header">
      A Little Bit About Me</h2>
    <div className="about-description">
    <p className="description-1">Hello! 👋 I'm Kainat Farooq, a front-end web developer focused on creating 
    engaging and user-friendly experiences while writing clean code. Proficient in HTML, CSS, JavaScript, 
    and ReactJS, I actively embrace modern technologies to craft innovative web solutions. </p>
    <p className="description-2">Always willing to collaborate, engage in fresh discussions, and take on new opportunities and challenges. Feel free to reach out using <a href="mailto:kainatfarooqmunara@gmail.com" target="_blank">Email</a> or connect with me on <a href="https://www.linkedin.com/in/kainat-farooq-6097b21b3/" target="_blank">Linkedin</a> and <a href="https://github.com/Kainat18" target="_blank">Github</a>.</p>
    
    <a href="https://drive.google.com/file/d/1GMhvOI8uI7Jyx3FHfk_ak4V-YPOzKH99/view?usp=sharing" target="_blank" className="resume-link">
     <motion.button 
     className="Resume-btn" 
     variants={buttonVariants}
     whileHover="hover"
     whileTap="tap"
     >Resume
     </motion.button>
    </a>
    </div>
  </div>
  )
}

export default About
 