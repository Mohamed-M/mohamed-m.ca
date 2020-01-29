import React, { Component } from "react";
import "./portfolio-pages.scss";

class SophisticatedBlog extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Sophisticated Blog</h2>
            <img src={require('./../../../assets/image/sb_logo.jpg')} alt="Sophisticated Blog" className="pf-logo" />
            <a className="pf-btn" rel="noopener noreferrer" target="_blank" href="https://mohamed-m.github.io/sophisticated-blog/">View on Github</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">A simple one landing page for a blog with a full viewport height cinemagraph. It is open source and hosted on Github for downloading.</p>
            <p className="pf-copy">I created this landing page with a goal of making it the index of my blog site. But after further consideration, I pivoted and chose the design in the Articles sections for my blog design.</p>
            <p className="pf-copy">The technologies were only HTML5 markup and CSS3 custom styles. I utilized Gulp as my task runner, and structured each component and/or page into to a separate SCSS file. I used PostCSS as post-processor, and Sass as the pre-preprocessor. Git was the version control used on this project.</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/sb.jpg')} alt="" className="pf-feature-img" />
            <img src={require('./../../../assets/image/sb2.jpg')} alt="Sophisticated Blog" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default SophisticatedBlog;
