import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Portfolio.scss";

class Portfolio extends Component {
  render() {
    return (
      <main className="portfolio">
        <h2>Pixel Perfect Design with a Modular Architecture</h2>
        <div className="portfolio-wrapper">
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

          <a href="portfolio/theregionalgroup.html">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img src={require('./../../assets/image/theregionalgroup.jpg')} alt="The Regional Group" />
              </div>

              <div className="portfolio-title">The Regional Group</div>
            </article>
          </a>
          <a href="https://mohamed-m.github.io/Archetype">
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
          <a href="portfolio/rthmf.html">
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
          </a>

          <a href="portfolio/harlem-tribune.html">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/harlem_tribune_logo_transparent.png')}
                  alt="Harlem Tribune"
                />
              </div>
              <div className="portfolio-title">Harlem Tribune</div>
            </article>
          </a>

          <a href="portfolio/infrastructure.html">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img
                  src={require('./../../assets/image/infrastructure_logo.png')}
                  alt="Infrastructure Logo"
                />
              </div>
              <div className="portfolio-title">Infrastructure Build System</div>
            </article>
          </a>

          <a href="portfolio/shawn-lauren.html">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img src={require('./../../assets/image/shawn-lauren_logo.jpg')} alt="Shawn Lauren Logo" />
              </div>
              <div className="portfolio-title">Shawn Lauren 1992 Stadium</div>
            </article>
          </a>

          <a href="portfolio/kasanova.html">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img src={require('./../../assets/image/kasanova_logo.jpg')} alt="Kasanova Logo" />
              </div>
              <div className="portfolio-title">Kasanova Construction</div>
            </article>
          </a>

          <a href="portfolio/sophisticated-blog.html">
            <article className="portfolio-item">
              <div className="portfolio-banner">
                <img src={require('./../../assets/image/sb_logo.jpg')} alt="Sophisticated Blog" />
              </div>
              <div className="portfolio-title">Sophisticated Blog</div>
            </article>
          </a>
        </div>
      </main>
    );
  }
}

export default Portfolio;
