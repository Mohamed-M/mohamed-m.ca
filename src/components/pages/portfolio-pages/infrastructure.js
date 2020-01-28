import React, { Component } from "react";
import "./portfolio-pages.scss";

class Infrastructure extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="pf-page">
          <div className="pf-info">
            <h2>Infrastructure</h2>
            <img src={require('./../../../assets/image/infrastructure_logo.png')} alt="Raising the hammer music festival image" className="pf-logo" />
            <a className="pf-btn" target="_blank" href="https://www.raisinthehammer.org/">Visit Site</a>
            </div>
          <div className="left-panel">
            <p>A build system that utilizes Sass as the preprocessor that get's piped into PostCSS, which behaves as a post processor and transpiles various plugins into the source code. The Javascript is minified with gulp-uglify. Gulp is the task runner that ties it altogether and watches/exports all the files in the development folder to the production folder, and also provides a local server with Browsersync.</p>        
            <h4>Getting Started</h4>
            <p>These instructions will get you a copy of the system up and running on your local machine for development.</p>
            <h4>Prerequisites</h4>
            <ul>
              <li>Node Package Manager (NPM)</li>
              <li>Git</li>
              <li>Command Line Interface (CLI)</li>
              <li>Gulp Command Line Interface (Gulp-CLI)</li>
            </ul>
            <h4>Built With</h4>
            <ul>
              <li>PostCSS - A CSS Preprocessor used for transforming styles with JS plugins. Plugins used in this project:</li>
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
              <li>Gulp - A toolkit for automating painful or time-consuming tasks in your development workflow.</li>
              <li>Sass - Sass is an extension of CSS that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax.</li>
            </ul>
            <h4>Installation</h4>
            <ul>
              <li>Copy the git repository to your local folder:</li>
              <pre>git clone https://github.com/Mohamed-M/Infrastructure.git</pre>
              
              <li>Run the NPM installer, which will run the package.json file and install all the necessary dependencies (i.e. PostCSS plugins):</li>
              <pre>npm install</pre>

              <li>Run the Gulp process to process the CSS, and open up a web server with live reload.</li>
              <pre>npm start</pre>
            </ul>
          </div>
        </main>
    </React.Fragment>
    );
  }
}

export default Infrastructure;
