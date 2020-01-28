import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'

function Header() {
  return (
    <section className="main-nav">
      <Link to="/">
        <img class="logo" src={require('./../../assets/image/logo.png')} />
      </Link>
      <ul className="nav-container">
      <Link to="articles" className="nav-link"><li>Articles<span className="fa fa-file-code-o"></span></li></Link>
      <Link to="portfolio" className="nav-link"><li>Portfolio<span className="fa fa-folder-open-o"></span></li></Link>
      <Link to="about" className="nav-link"><li>About<span className="fa fa-address-book-o"></span></li></Link>
      <Link to="contact" className="nav-link"><li>Contact<span className="fa fa-envelope-o"></span></li></Link>
    </ul>
  </section>
  )
}

export default Header