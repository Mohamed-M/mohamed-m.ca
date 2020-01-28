import React from 'react';
import Header from './components/layout/Header'
import './App.scss';
import BackgroundVideo from './components/background-video/BackgroundVideo';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BackgroundVideo />
      <section className="intro-page">
        <article className="intro-info">
          <p className="intro-title">Hey, I'm Mohamed, a Front End Web Developer.</p>
          <p className="intro-subtitle">I'm enthusiastic about web development, great design aesthetics, and learning new technologies.</p>
        </article>
      </section>
    </React.Fragment>
  );
}

export default App;
