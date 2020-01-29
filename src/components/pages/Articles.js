import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Articles.scss'

class Articles extends Component {
  render() {
    return (
      <main className="articles">
        <h2>Articles on web development</h2>
    
        <a href="/wordpress-one-page">
          <article className="article-card">
            <span className="article-date">10/17/2018</span>
            <h3>Creating a WordPress One Page Theme Walkthrough</h3>
            <p>A simple tutorial on the fundamentals of creating a solid starting foundation.</p>
          </article>   
        </a>

        <a href="https://mohamed-m.github.io/Archetype">
          <article className="article-card">
            <span className="article-date">12/28/2018</span>
            <h3>Archetype Web Components</h3>
            <p>A front end UI framework for building sites quickly.</p>
          </article>      
        </a>
    
        <a href="/passive-income">
          <article className="article-card">
            <span className="article-date">10/14/2018</span>
            <h3>How to Start a Passive Income Project</h3>
            <p>Supplement your daily grind, with an automated secondary income.</p>
          </article>   
        </a>
    
        <a href="/infrastructure-article">
          <article className="article-card">
            <span className="article-date">10/11/2018</span>
            <h3>Announcing the Launch of my 'Infrastructure' Build System!</h3>
            <p>A front end build system on a PostCSS/Sass/Gulp stack.</p>
          </article>   
        </a>
        <a href="/modern-web-dev">
          <article className="article-card">
            <span className="article-date">10/08/2018</span>
            <h3>Modern Web Development Workflow Walkthrough</h3>
            <p>My latest techniques and hacks to a productive workflow.</p>
          </article>   
        </a>
        <a href="/bem-methodology">
          <article className="article-card">
            <span className="article-date">10/05/2018</span>
            <h3>B.E.M. Methodology Explained</h3>
            <p>A brisk run through of key concepts in CSS structuring.</p>
          </article>   
        </a>
        <a href="/css-layout-techniques">
          <article className="article-card">
            <span className="article-date">10/02/2018</span>
            <h3>CSS Layout Techniques</h3>
            <p>My opinion on what settings and craftsmanship one should use in laying out the user interface.</p>
          </article>   
        </a>
      </main>
    )
  }
}

export default Articles;