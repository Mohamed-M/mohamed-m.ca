import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Blog.scss'

class Blog extends Component {
  render() {
    return (
      <main className="blog">
        <h2>Blog</h2>


        <a rel="noopener noreferrer" target="_blank" href="https://mohamed-m.github.io/Archetype">
          <article className="blog-card">
            <h3>Project: Archetype Web Components</h3>
            <p>A front end UI framework for building sites quickly.</p>
          </article>
        </a>

        <Link to="infrastructure-article">
          <article className="blog-card">
            <h3>Project: Infrastructure Build System</h3>
            <p>A front end build system on a PostCSS/Sass/Gulp stack.</p>
          </article>
        </Link>

        <Link to="wordpress-one-page">
          <article className="blog-card">
            <h3>Creating a WordPress One Page Theme Walkthrough</h3>
            <p>A simple tutorial on the fundamentals of creating a solid starting foundation.</p>
          </article>
        </Link>

        <Link to="passive-income">
          <article className="blog-card">
            <h3>How to Start a Passive Income Project</h3>
            <p>Supplement your daily grind, with an automated secondary income.</p>
          </article>
        </Link>
        <Link to="bem-methodology">
          <article className="blog-card">
            <h3>B.E.M. Methodology</h3>
            <p>A brisk run through of key concepts in CSS structuring.</p>
          </article>
        </Link>
      </main>
    )
  }
}

export default Blog;