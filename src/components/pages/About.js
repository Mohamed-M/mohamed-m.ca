import React, { Component } from 'react'
import './About.scss'

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-page">
          <article className="about-info">
            <p className="about-title">Mohamed M.</p>
            <p className="about-description">Hey there. I'm a Front End Web Developer and a UI/UX Designer. I have been coding since I was 11 years old. To be more precise, I have been building applications and websites since 1999.</p>
            <p className="about-description">These days I like to delve into the development side of web applications. I enjoy coding in the front end and back end. I believe in convention over configuration, and utilizing a modular methodology on the front end architecture.</p>
          </article>
          <section className="about-pic">
            <img src={require('./../../assets/image/mohamed.jpg')} alt="Picture of Mohamed M." />
          </section>
        </section>


        <section className="abilities-section">
          <p className="abilities-title">Skillset</p>
          <ul className="abilities">
            <li className="ability-html">HTML5</li>
            <li className="ability-css">CSS3/POSTCSS/SCSS</li>
            <li className="ability-javascript">JavaScript/ES6+/TypeScript</li>
            <li className="ability-react">React/Redux</li>
            <li className="ability-angular">Angular 2/7+</li>
            <li className="ability-git">Git/NPM</li>
            <li className="ability-photoshop">Photoshop/Sketch</li>
          </ul>
        </section>
      </React.Fragment>
    )
  }
}

export default About;