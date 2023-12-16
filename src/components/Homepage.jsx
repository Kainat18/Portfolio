import React from 'react';

function Homepage() {
  return (
    <div id="homepage">
      <div className="homepage-bg"></div>
      <div className="homepage-description">
      <h1 className="intro">Hello, I'm Kainat Farooq</h1>
      <h4>A Front End Developer </h4>
      <p className= "intro-quote">Unlocking the Web's Wonders, One Project at a Time</p>
    </div> 
    <div className="homepage-btns">
      <button className="home-btn work"><a href="#Projects-section">View my work »</a> </button>
      <button className="home-btn contact"><a href="#Contact-section">Contact me</a></button>
    </div>
    </div>
  )
}

export default Homepage
