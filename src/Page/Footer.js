import React from 'react'
import sendIcon from './../Images/send.png';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-links">
        <div className="nav-links-logo">
          <a href="#" className="footer-logo">LOGO</a>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">discovery</a></li>
            <li><a href="#">photos</a></li>
            <li><a href="#">contact</a></li>
          </ul>
          <ul>
            <li><a href="#">about</a></li>
            <li><a href="#">help</a></li>
            <li><a href="#">terms</a></li>
            <li><a href="#">guidelines</a></li>
          </ul>
          <ul>
            <li><a href="#">testimonials</a></li>
            <li><a href="#">advertise</a></li>
            <li><a href="#">integrations</a></li>
            <li><a href="#">careers</a></li>
          </ul>
        </div>
        <div className="form-icons">
          <form>
            <div id="input-container">
              <input type="email" placeholder="Email" id="input" />
              <a href="#">
                <img src={sendIcon} alt="Send" id="input-img" />
              </a>
            </div>
            <p>Stay in touch with us for the freshest products!</p>
          </form>
          <div className="d-flex icons-list">
            <div className="instagram">
              <a href="javascript:void(0)"><i className="fab fa-instagram"></i></a>
            </div>
            <div>
              <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
            </div>
            <div>
              <a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a>
            </div>
            <div>
              <a href="javascript:void(0)"><i className="fas fa-globe-americas"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
