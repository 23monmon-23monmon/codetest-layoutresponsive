import React from 'react'
import tinyImg1 from './../Images/tiny-img1.png';
import homeIcon from './../Images/home.png';
import discoverIcon from './../Images/discover.svg';
import photosIcon from './../Images/photos.svg';
import mailIcon from './../Images/mail.svg';
import sendIcon from './../Images/send.png';

export default function Header() {
  return (
    <header className="d-flex">
      <div>
        <a href="world-news" className="logo">LOGO</a>
      </div>
      <nav className="nav">
        <ul className="d-flex main-nav">
          <li><a href="index.html">HOME</a></li>
          <li><a href="#">DISCOVERY</a></li>
          <li><a href="#trending">PHOTOS</a></li>
          <li><a href="#footer">CONTACT</a></li>
          <li>
            <a href="#" id="avatar-girl">
              <img src={tinyImg1} alt="profile" />
            </a>
          </li>
        </ul>
        <div id="mobile-menu">
          <div id="hamburger">
            <div className="bar line-1"></div>
            <div className="bar line-2 short"></div>
            <div className="bar line-3"></div>
          </div>
          <div>
            <a href="#" id="logo">LOGO</a>
          </div>
          <div>
            <a href="#">
              <img src={tinyImg1} alt="profile" />
            </a>
          </div>
        </div>
        <div className="mobile-background">
          <ul id="mobile-links">
            <li className="mobile-nav-link" id="mobile-logo">
              <a href="#">LOGO</a>
            </li>
            <li className="mobile-nav-link">
              <a href="index.html"><img src={homeIcon} alt="home" />HOME</a>
            </li>
            <li className="mobile-nav-link">
              <a href="#">
                <img src={discoverIcon} alt="discovery" />DISCOVERY
              </a>
            </li>
            <li className="mobile-nav-link">
              <a href="#trending">
                <img src={photosIcon} alt="photos" />PHOTOS
              </a>
            </li>
            <li className="mobile-nav-link">
              <a href="#footer"><img src={mailIcon} alt="contact" />CONTACT</a>
            </li>
            <li className="mobile-nav-link">
              <a href="#">
                <img src={tinyImg1} id="profile" alt="profile" />PROFILE
              </a>
            </li>
          </ul>
          <div id="mobile-footer">
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
            <ul id="mobile-icons-list">
              <li className="instagram">
                <a href="javascript:void(0)">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fas fa-globe-americas"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
