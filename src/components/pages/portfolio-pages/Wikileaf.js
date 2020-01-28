import React, { Component } from "react";
import "./portfolio-pages.scss";

class Wikileaf extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Wikileaf</h2>
            <img src={require('./../../../assets/image/wikileaf_logo2.png')} alt="Wiki logo image" className="pf-logo" />
            <a className="pf-btn" target="_blank" href="https://www.wikileaf.com/">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">Wikileaf Technologies is a Seattle/Ottawa business providing data services to the cannabis industry and information to consumers. The company provides price indexes and cannabis strain reviews and information.</p>
            <p className="pf-copy">I implemented the UI/UX for the new design version. Converted the front end structure to the mobile web first philosophy, and saffolded Angular components to parse data, and created Services to update the database.</p>
            <p className="pf-copy">The technologies were: HTML5, CSS3/SASS, TypeScript/JavaScript, Angular 7</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/wikileaf1.jpg')} alt="wikileaf app image" className="pf-feature-img" />
            <img src={require('./../../../assets/image/wikileaf2.jpg')} alt="Wikileaf website Image" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default Wikileaf;
