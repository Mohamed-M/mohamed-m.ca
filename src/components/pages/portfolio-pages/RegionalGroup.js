import React, { Component } from "react";
import "./portfolio-pages.scss";

class RegionalGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>The Regional Group</h2>
            <img src={require('./../../../assets/image/theregionalgrouplogo.jpg')} alt="The Regional Group" className="pf-logo" />
            <a className="pf-btn" target="_blank" href="https://regionalgroup.com/">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">Regional Group is a Canadian real estate industry leader. The company has created opportunity and value, and demonstrated superior returns on investment in all real estate classes for clients and partners since 1958. The company has been family owned for three generations and its extensive relationships, visionary leadership, integrity, excellence and collaborative style are hallmarks of the business.</p>
            <p className="pf-copy">I was the sole front-end Developer on this project while working at Baytek. My team and I designed, developed and launched the new online rebranding for The Regional Group, a local real estate developer. The deliverables I provided were the mobile, tablet and desktop front end development.</p>
            <p className="pf-copy">The technologies were: WordPress, Divi, HTML5, CSS3, jQuery, JavaScript, Gulp, VS Code.</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/theregionalgroup.jpg')} alt="" className="pf-feature-img" />
            <img src={require('./../../../assets/image/theregionalgroup2.jpg')} alt="The Regional Group" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default RegionalGroup;
