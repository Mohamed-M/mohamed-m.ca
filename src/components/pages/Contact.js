import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="contact-page">
          <h2 className="contact-title">Contact</h2>

          <div className="contact-wrapper animated fadeInUpBig">
            <div className="contact-info">
              <h3>Mohamed Ahmed Mohamud</h3>
            </div>
            <div className="contact-form">
              <ul>
                <li>
                  <i className="fa fa-github"></i>
                  <a rel="noopener noreferrer" target="_blank" href="http://www.github.com/mohamed-m"> Github Profile</a>
                </li>
                <li>
                  <i className="fa fa-file"></i>
                  <a rel="noopener noreferrer" target="_blank" href={require('./../../assets/doc/Mohamed_Mohamud_Resume.PDF')}> Resume (PDF)</a>
                </li>
                <li>
                  <i className="fa fa-map-pin"></i> <span>Ottawa, Ontario</span>
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <a rel="noopener noreferrer" target="_blank" href="mailto:contact@mohamed-m.ca">contact@mohamed-m.ca</a>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <a rel="noopener noreferrer" target="_blank" href="tel:9057005789">(613) 700-5789</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
