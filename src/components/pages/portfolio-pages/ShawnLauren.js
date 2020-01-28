import React, { Component } from "react";
import "./portfolio-pages.scss";

class ShawnLauren extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Shawn Lauren 1992 Stadium</h2>
            <img src={require('./../../../assets/image/shawn-lauren_logo.jpg')} alt="Shawn Lauren" className="pf-logo" />
            <a className="pf-btn" target="_blank" href="https://mohamed-m.github.io/shawn-lauren">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">A fashion landing page with 2 funnel channels. The title of the site is paying homage to the Ralph Lauren 1992 Stadium collection. Which was a significant moment in urban street fashion, and is still revered to this day.</p>
            <p className="pf-copy">I created this page for fun, and to experiment with the CSS Flexbox module. It is responsive by using the Mobile First approach. It is open source and can be downloaded/forked.</p>
            <p className="pf-copy">The technologies were only HTML5 markup and CSS3 custom styles. I utilized Gulp as my task runner, and structured each component and/or page into to a separate SCSS component file. I used PostCSS as post-processor, and Sass as the pre-preprocessor. Git was the version control used on this project.</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/shawn-lauren.jpg')} alt="Shawn Lauren Image" className="pf-feature-img" />
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default ShawnLauren;
