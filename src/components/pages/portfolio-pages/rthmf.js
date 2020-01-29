import React, { Component } from "react";
import "./portfolio-pages.scss";

class RTHMF extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Raisin' The Hammer Music Festival</h2>
            <img src={require('./../../../assets/image/rthmf_logo.jpg')} alt="Raising the hammer music festival" className="pf-logo" />
            <a className="pf-btn" rel="noopener noreferrer" target="_blank" href="https://www.raisinthehammer.org/">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">A music festival held biannually, Raisin The Hammer Festival, is a not-for-profit organization dedicated to promoting Hamilton, Ontario by hosting events celebrating the arts and culture of the city and its surrounding regions.</p>
            <p className="pf-copy">I was tasked with creating the design and development for the website. Kirk, director of Gameday Entertainment, approached me with finding a solution to promote the festival and present relevant information to customers. I went with a large video background splash page, and card style layout for pictures and content. I used a Mobile First design approach for smaller screens, and utilized the flexbox module to layout the elements on the page. Older browsers were taken into consideration, by using the autoprefixer postcss plugin for browser vendor prefixes.</p>
            <p className="pf-copy">The technologies were mainly HTML5 markup and CSS3 custom styles with a little Javascript/jQuery. I utilized Gulp as my task runner, and structured each component and/or page into to a separate CSS file. Instead of Sass as a pre-preprocessor, I used PostCSS as post-processor, and PreCSS as the pre-preprocessor. Git was the version control used on this project. This project also came with the PSD photoshop files of the design as well.</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/rthmf.jpg')} alt="Raisin the hammer music festival" className="pf-feature-img" />
            <img src={require('./../../../assets/image/rthmf2.jpg')} alt="Raisin the hammer music festival" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}

export default RTHMF;
