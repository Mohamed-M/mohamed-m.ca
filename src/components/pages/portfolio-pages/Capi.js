import React, { Component } from "react";
import "./portfolio-pages.scss";

class BigJump extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Canadian Agri-Food Policy Institute</h2>
            <img src={require('./../../../assets/image/capi_logo.jpg')} alt="Capi logo" className="pf-logo" />
            <a className="pf-btn" rel="noopener noreferrer" target="_blank" href="https://capi-icpa.ca/">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">The Canadian Agri-Food Policy Institute (CAPI) is the place for agri-food leaders to come together, share insights and advance ideas on emerging issues facing this important sector.</p>
            <p className="pf-copy">I was lead Front-end developer on this project while working at Baytek. My team and I designed, developed and launched the new online rebranding for The Canadian Agri-Food Policy Institute (CAPI). The deliverables I provided were the mobile, tablet and desktop front end development.</p>
            <p className="pf-copy">The technologies were: WordPress, Divi, HTML5, CSS3, jQuery, JavaScript, Gulp, VS Code.</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/capi.jpg')} alt="" className="pf-feature-img" />
            <img src={require('./../../../assets/image/capiresearch.jpg')} alt="Capi Research" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default BigJump;
