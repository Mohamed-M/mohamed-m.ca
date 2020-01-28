import React, { Component } from "react";
import "./portfolio-pages.scss";

class WordPressOnePage extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Big Jump Entertainment</h2>
            <img src={require('./../../../assets/image/bigjumplogo.jpg')} alt="Big Jump Entertainment" className="pf-logo" />
            <a className="pf-btn" target="_blank" href="https://bigjumpent.com/">Visit Site</a>
            </div>
          <div className="left-panel">
            <p className="pf-copy">BIG JUMP Entertainment is a privately owned, independent, 2D hybrid animation production facility that specializes in the seamless combination of traditional and digital techniques.</p>
            <p className="pf-copy">I was lead front-end developer on this project while working at Baytek. My team and I designed, developed and launched the new online rebranding for Big Jump Ent, a local animation studio. The deliverables I provided were the mobile, tablet and desktop front end development.</p>
            <p className="pf-copy">The technologies were: WordPress, Divi, HTML5, CSS3, jQuery, JavaScript, Gulp, VS Code.</p>
          </div>

          <div className="right-panel">
            <img src={require('./../../../assets/image/bigjump.jpg')} alt="" className="pf-feature-img" />
            <img src={require('./../../../assets/image/bigjumpstudio.jpg')} alt="Big Jump Entertainment" className="pf-img" />        
          </div>
        </main>
    </React.Fragment>
    );
  }
}
export default WordPressOnePage;
