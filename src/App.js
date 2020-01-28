import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import BackgroundVideo from './components/background-video/BackgroundVideo';
import Header from './components/layout/Header';
import Articles from './components/pages/Articles';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Capi from './components/pages/portfolio-pages/Capi';
import BigJump from './components/pages/portfolio-pages/BigJump';
import RegionalGroup from './components/pages/portfolio-pages/RegionalGroup';
import Wikileaf from './components/pages/portfolio-pages/Wikileaf';
import RTHMF from './components/pages/portfolio-pages/RTHMF';
import HarlemTribune from './components/pages/portfolio-pages/HarlemTribune';
import Infrastructure from './components/pages/portfolio-pages/Infrastructure';
import Kasanova from './components/pages/portfolio-pages/Kasanova';

import './App.scss';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route exact path='/'>
          <BackgroundVideo />
          <section className="intro-page">
            <article className="intro-info">
              <p className="intro-title">Hello, I'm Mohamed, a Front End Web Developer.</p>
              <p className="intro-subtitle">I'm enthusiastic about web development, great design aesthetics, and learning new technologies.</p>
            </article>
          </section>
        </Route>

        <Route path='/articles'>
          <Articles />
        </Route>

        <Route path='/portfolio'>
          <Portfolio />
        </Route>

        <Route path='/about'>
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

        <Route path="/kasanova">
          <Kasanova />
        </Route>

      </React.Fragment>
    </Router>
  );
}

export default App;
