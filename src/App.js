import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/modules/ScrollToTop'
import BackgroundVideo from "./components/background-video/BackgroundVideo";
import Header from "./components/layout/Header";
import Blog from "./components/pages/Blog";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Capi from "./components/pages/portfolio-pages/Capi";
import BigJump from "./components/pages/portfolio-pages/BigJump";
import RegionalGroup from "./components/pages/portfolio-pages/RegionalGroup";
import Wikileaf from "./components/pages/portfolio-pages/Wikileaf";
import RTHMF from "./components/pages/portfolio-pages/RTHMF";
import Infrastructure from "./components/pages/portfolio-pages/Infrastructure";
import WordPressOnePage from "./components/pages/blog-pages/WordPressOnePage";
import PassiveIncome from "./components/pages/blog-pages/PassiveIncome";
import InfrastructureArticle from "./components/pages/blog-pages/InfrastructureArticle";
import BEMMethodology from "./components/pages/blog-pages/BEMMethodology";
import "./App.scss";

function App() {
  return (
    <Router>
      <React.Fragment>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path="/">
              <BackgroundVideo />
              <section className="intro-page">
                <article className="intro-info">
                  <p className="intro-title">
                    Hello, I'm Mohamed, a Front End Web Developer.
                </p>
                  <p className="intro-subtitle">
                    I'm enthusiastic about web development, great code structure,
                    and learning new technologies.
                </p>
                </article>
              </section>
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/bigjump">
              <BigJump />
            </Route>

            <Route path="/capi">
              <Capi />
            </Route>

            <Route path="/regionalgroup">
              <RegionalGroup />
            </Route>

            <Route path="/wikileaf">
              <Wikileaf />
            </Route>

            <Route path="/rthmf">
              <RTHMF />
            </Route>
            <Route path="/infrastructure">
              <Infrastructure />
            </Route>
            <Route path="/wordpress-one-page">
              <WordPressOnePage />
            </Route>
            <Route path="/passive-income">
              <PassiveIncome />
            </Route>
            <Route path="/infrastructure-article">
              <InfrastructureArticle />
            </Route>
            <Route path="/bem-methodology">
              <BEMMethodology />
            </Route>
          </Switch>
        </ScrollToTop>
      </React.Fragment>
    </Router>
  );
}

export default App;
