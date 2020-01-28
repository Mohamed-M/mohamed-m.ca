import React from 'react'
import './Header.scss'

function Header() {
  return (
    <section className="main-nav">
      <a href="index.html" className="logo">M</a>
      <ul className="nav-container">
      <a href="articles.html" className="nav-link"><li>Articles<span className="fa fa-file-code-o"></span></li></a>
      <a href="portfolio.html" className="nav-link"><li>Portfolio<span className="fa fa-folder-open-o"></span></li></a>
      <a href="about.html" className="nav-link"><li>About<span className="fa fa-address-book-o"></span></li></a>
      <a href="contact.html" className="nav-link"><li>Contact<span className="fa fa-envelope-o"></span></li></a>
    </ul>
  </section>
  )
}

export default Header