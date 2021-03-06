import React, { Component } from 'react'
import './About.scss'

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-page">
          <article className="about-info">
            <p className="about-title">About</p>
            <p className="about-description">Hello, there. My name is Mohamed, and I'm a front-end/UI Web Developer. I'm a dynamic web developer with a passion for user experience, responsive web design and enthusiastic about great code structure, efficient workflows and learning new technologies.</p>
            <p className="about-description">My interests and hobbies are sports, reading and watching documentaries.</p>
          </article>
          <section className="about-pic">
            <img src={require('./../../assets/image/mohamed.jpg')} alt="Mohamed M." />
          </section>
        </section>


        <section className="abilities-section">
          <p className="abilities-title">Skillset</p>
          <ul className="abilities">
            <li className="ability-html">HTML5</li>
            <li className="ability-css">CSS3/SASS/SCSS</li>
            <li className="ability-javascript">JavaScript/ES6+/TypeScript</li>
            <li className="ability-angular">Angular</li>
            <li className="ability-react">React</li>
            <li className="ability-sketch">Sketch/Adobe XD</li>
          </ul>
        </section>
      </React.Fragment>
    )
  }
}

export default About;