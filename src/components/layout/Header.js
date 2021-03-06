import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'

function Header() {
  return (
    <section className="main-nav">
      <Link to="/" className="logo">
        <img src={require('./../../assets/image/logo.png')} alt="Mohamed Logo" />
      </Link>
      <ul className="nav-container">
        <Link to="blog" className="nav-link"><li>Blog<span className="fa fa-file-code-o"></span></li></Link>
        <Link to="portfolio" className="nav-link"><li>Portfolio<span className="fa fa-folder-open-o"></span></li></Link>
        <Link to="about" className="nav-link"><li>About<span className="fa fa-address-book-o"></span></li></Link>
        <Link to="contact" className="nav-link"><li>Contact<span className="fa fa-envelope-o"></span></li></Link>
      </ul>
    </section>
  )
}

export default Header