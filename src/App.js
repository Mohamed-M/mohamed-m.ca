import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Articles from './components/pages/Articles'
import './App.scss';
import BackgroundVideo from './components/background-video/BackgroundVideo';

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

        <Route path='/articles' component="{Articles}">
          <Articles />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
