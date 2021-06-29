import React, { Component } from "react";
import "./portfolio-pages.scss";

class Sectigo extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Sectigo</h2>
            <img src={require('./../../../assets/image/sectigo_logo2.png')} alt="Wiki logo image" className="pf-logo" />
            <a className="pf-btn" rel="noopener noreferrer" target="_blank" href="https://www.sectigo.com/">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">Sectigo is a leading provider of digital identity solutions, including SSL / TLS certificates, DevOps, IoT, and enterprise-grade PKI (Public Key Infrastructure) management, as well as multi-layered web security.</p>
            <p className="pf-copy">I worked on the UI development in the internal web app service. My tasks and duties were to implement new pages and components of new features to assist the marketing and sales team.</p>
            <p className="pf-copy">The technologies were: Angular, Typescript and HTML</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/sectigo-1.png')} alt="sectigo ui" className="pf-feature-img" />
            <img src={require('./../../../assets/image/sectigo-2.jpeg')} alt="sectigo generator" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default Sectigo;
