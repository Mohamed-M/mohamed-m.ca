import React, { Component } from "react";
import "./article-pages.scss";

class PassiveIncome extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="article-content">
          <article class="article-entry">
            <div class="article-title">
              <h1>Infrastructure Build System</h1>
            </div>
            <div class="article-body">
              <p>
                A build system that utilizes Sass as the preprocessor that get's
                piped into PostCSS, which behaves as a post processor and
                transpiles various plugins into the source code. Gulp is the
                build system that ties it altogether, which also provides a
                local server with livereload.
              </p>
              <h4>Getting Started</h4>
              <p>
                These instructions will get you a copy of the system up and
                running on your local machine for development.
              </p>
              <a href="https://www.github.com/Mohamed-M/Infrastructure">GitHub Repo Link</a>
              <h4>Prerequisites</h4>
              <ul>
                <li>Node Package Manager (NPM)</li>
                <li>Git</li>
                <li>Command Line Interface (CLI)</li>
              </ul>
              <h4>Built With</h4>
              <ul>
                <li>
                  PostCSS - A CSS Preprocessor used for transforming styles with
                  JS plugins. Plugins used in this project:
                </li>
                <ul>
                  <li>cssnext ( + autoprefixer)</li>
                  <li>cssnano</li>
                  <li>gulp</li>
                  <li>gulp-postcss</li>
                  <li>gulp-wait</li>
                  <li>gulp-uglify</li>
                  <li>browser-sync</li>
                  <li>postcss-animation</li>
                  <li>sass</li>
                  <li>lost</li>
                </ul>
              </ul>
              <ul>
                <li>
                  Gulp - A toolkit for automating painful or time-consuming
                  tasks in your development workflow.
                </li>
                <li>
                  Sass - Sass is an extension of CSS that adds power and
                  elegance to the basic language. It allows you to use
                  variables, nested rules, mixins, inline imports, and more, all
                  with a fully CSS-compatible syntax.
                </li>
              </ul>
              <h4>Installation</h4>
              <ul>
                <li>Copy the git repository to your local folder:</li>
                <pre>
                  git clone
                  https://github.com/Mohamed-M/Gulp-PostCSS-Sass-Build-System.git
                </pre>

                <li>
                  Run the NPM installer, which will run the package.json file
                  and install all the necessary dependencies (i.e. PostCSS
                  plugins):
                </li>
                <pre>npm install</pre>

                <li>
                  Run the Gulp process to process the CSS, and open up a web
                  server with live reload.
                </li>
                <pre>gulp</pre>
              </ul>
            </div>
          </article>
        </main>
      </React.Fragment>
    );
  }
}

export default PassiveIncome;
