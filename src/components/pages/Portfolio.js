import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Portfolio.scss";

class Portfolio extends Component {
  render() {
    return (
      <main className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-wrapper">

          <Link to="/sectigo">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/sectigo_logo.png')}
                  alt="Sectigo"
                />
              </div>
              <div className="portfolio-title">
                Sectigo
              </div>
            </article>
          </Link>

          <Link to="/wikileaf">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/wikileaf_logo.png')}
                  alt="Wikileaf"
                />
              </div>
              <div className="portfolio-title">
                Wikileaf
              </div>
            </article>
          </Link>

          <Link to="/capi">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/capi.jpg')}
                  alt="Canadian Agri-Food Policy Institute"
                />
              </div>
              <div className="portfolio-title">
                Canadian Agri-Food Policy Institute
              </div>
            </article>
          </Link>

          <Link to="/bigjump">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img src={require('./../../assets/image/bigjump.jpg')} alt="Big Jump Ent." />
              </div>
              <div className="portfolio-title">Big Jump Ent.</div>
            </article>
          </Link>

          <Link to="/regionalgroup">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img src={require('./../../assets/image/theregionalgroup.jpg')} alt="The Regional Group" />
              </div>
              <div className="portfolio-title">The Regional Group</div>
            </article>
          </Link>

          <a rel="noopener noreferrer" target="_blank" href="https://mohamed-m.github.io/Archetype">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/logo_transparent.png')}
                  alt="Archetype Web Components"
                />
              </div>
              <div className="portfolio-title">Archetype Web Components</div>
            </article>
          </a>

          <Link to="/infrastructure">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/infrastructure_logo.png')}
                  alt="Infrastructure Logo"
                />
              </div>
              <div className="portfolio-title">Infrastructure Build System</div>
            </article>
          </Link>

          <Link to="/rthmf">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/rthmf_logo.jpg')}
                  alt="Raisin The Hammer Music Festival"
                />
              </div>
              <div className="portfolio-title">
                Raisin The Hammer Music Festival
              </div>
            </article>
          </Link>

        </div>
      </main>
    );
  }
}

export default Portfolio;
