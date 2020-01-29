import React, { Component } from "react";
import "./portfolio-pages.scss";

class Kasanova extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Kasanova</h2>
            <img src={require('./../../../assets/image/kasanova_logo.jpg')} alt="Kasanova logo" className="pf-logo" />
            <a className="pf-btn" rel="noopener noreferrer" target="_blank" href="https://mohamed-m.github.io/kasanova-construction/index.html">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">Kasanova Construction is a small construction company based in Milton. They specialize in natural stone and flagstone, interlocking, retaining walls, sodding and landscape design, bobcat & mini excavtor services.</p>
            <p className="pf-copy">The client wanted a simple elegant site demonstrating his previous work, and a form/contact page where potential customers can recieve a quote. I utilized a "design in the browser" strategy and kept the design minimal and concentrated on getting customers to the Call To Action (the Get A Quote link). On the Photo Gallery, I employed the cycle2 jquery plugin to create a photo gallery with photos of previous work. The website is created with the flex box module, and I used a "Mobile First" design approach.</p>
            <p className="pf-copy">The technologies were mainly HTML5 markup and CSS3 custom styles with a little Javascript/jQuery. I utilized Gulp as my task runner, and structured each component and/or page into to a separate CSS file. Instead of Sass as a pre-preprocessor, I used PostCSS as post-processor, and PreCSS as the pre-preprocessor. Git was the version control used on this project, to no suprise.</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/kasanova.jpg')} alt="Kasanova app" className="pf-feature-img" />
            <img src={require('./../../../assets/image/kasanova2.jpg')} alt="Kasanova website" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default Kasanova;
