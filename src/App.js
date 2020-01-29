import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BackgroundVideo from "./components/background-video/BackgroundVideo";
import Header from "./components/layout/Header";
import Articles from "./components/pages/Articles";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Capi from "./components/pages/portfolio-pages/Capi";
import BigJump from "./components/pages/portfolio-pages/BigJump";
import RegionalGroup from "./components/pages/portfolio-pages/RegionalGroup";
import Wikileaf from "./components/pages/portfolio-pages/Wikileaf";
import RTHMF from "./components/pages/portfolio-pages/RTHMF";
import HarlemTribune from "./components/pages/portfolio-pages/HarlemTribune";
import Infrastructure from "./components/pages/portfolio-pages/Infrastructure";
import ShawnLauren from "./components/pages/portfolio-pages/ShawnLauren";
import Kasanova from "./components/pages/portfolio-pages/Kasanova";
import SophisticatedBlog from "./components/pages/portfolio-pages/SophisticatedBlog";
import WordPressOnePage from "./components/pages/article-pages/WordPressOnePage";
import PassiveIncome from "./components/pages/article-pages/PassiveIncome";
import InfrastructureArticle from "./components/pages/article-pages/InfrastructureArticle";
import ModernWebDev from "./components/pages/article-pages/ModernWebDev";
import BEMMethodology from "./components/pages/article-pages/BEMMethodology";
import CSSLayoutTechniques from "./components/pages/article-pages/CSSLayoutTechniques";
import "./App.scss";

function App() {
  return (
    <Router>
      <React.Fragment>
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

          <Route path="/articles">
            <Articles />
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

          <Route path="/harlem-tribune">
            <HarlemTribune />
          </Route>

          <Route path="/infrastructure">
            <Infrastructure />
          </Route>

          <Route path="/shawn-lauren">
            <ShawnLauren />
          </Route>

          <Route path="/kasanova">
            <Kasanova />
          </Route>

          <Route path="/sophisticated-blog">
            <SophisticatedBlog />
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

          <Route path="/modern-web-dev">
            <ModernWebDev />
          </Route>

          <Route path="/bem-methodology">
            <BEMMethodology />
          </Route>

          <Route path="/css-layout-techniques">
            <CSSLayoutTechniques />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
