import React, { Component } from "react";
import "./portfolio-pages.scss";

class Capi extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <h2>Canadian Agri-Food Policy Institute</h2>
          <img src={require('./../../../assets/image/capi_logo.jpg')} alt="Canadian Agri-Food Policy Institute" className="pf-img" />

          <a className="pf-btn" target="_blank" href="https://capi-icpa.ca/">Visit Site</a>

          <p className="pf-copy">The Canadian Agri-Food Policy Institute (CAPI) is the place for agri-food leaders to come together, share insights and advance ideas on emerging issues facing this important sector.</p>
          
          <img src={require('./../../../assets/image/capi.jpg')} alt="" className="pf-feature-img" />

          <p className="pf-copy">Lead Front End Developer on this project while working at Baytek. My team and I designed, developed and launched the new online rebranding for The Canadian Agri-Food Policy Institute (CAPI). The deliverables I provided were the mobile, tablet and desktop front end development.</p>
          
          <img src={require('./../../../assets/image/capiresearch.jpg')} alt="Canadian Agri-Food Policy Institute" className="pf-img" />
              
          <p className="pf-copy">The technologies were: WordPress, Divi, HTML5, CSS3, jQuery, JavaScript, Gulp, VS Code.</p>
        </main>
      </React.Fragment>
    );
  }
}
export default Capi;
