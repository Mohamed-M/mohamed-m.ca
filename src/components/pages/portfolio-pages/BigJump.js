import React, { Component } from "react";
import "./portfolio-pages.scss";

class BigJump extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <h2>Big Jump Entertainment</h2>
          <img src={require('./../../../assets/image/bigjumplogo.jpg')} alt="Big Jump Entertainment" className="pf-img" />
      
          <a className="pf-btn" target="_blank" href="https://bigjumpent.com/">Visit Site</a>
      
          <p className="pf-copy">BIG JUMP Entertainment is a privately owned, independent, 2D hybrid animation production facility that specializes in the seamless combination of traditional and digital techniques.</p>
          
          <img src={require('./../../../assets/image/bigjump.jpg')} alt="" className="pf-feature-img" />
      
          <p className="pf-copy">Lead Front End Developer on this project while working at Baytek. My team and I designed, developed and launched the new online rebranding for Big Jump Ent, a local animation studio. The deliverables I provided were the mobile, tablet and desktop front end development.</p>
          
          <img src={require('./../../../assets/image/bigjumpstudio.jpg')} alt="Big Jump Entertainment" className="pf-img" />
              
          <p className="pf-copy">The technologies were: WordPress, Divi, HTML5, CSS3, jQuery, JavaScript, Gulp, VS Code.</p>
        </main>
    </React.Fragment>
    );
  }
}
export default BigJump;
