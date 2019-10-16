import React from 'react';

// style
import './style.scss';

// assets
import TwitterIcon from '../../assets/icon_twitter.svg';
import InstagramIcon from '../../assets/icon_instagram.svg';
import GithubIcon from '../../assets/icon_github.svg';
import YouTubeIcon from '../../assets/icon_youtube.svg';

function Footer() {
  return (
    <footer className="bmt-footer">
      <nav className="footer-nav">
        <ul className="nav-items-container">
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Releases &amp; Milestones</a></li>
          <li className="nav-item"><a href="#">Conversations</a></li>
          <li className="nav-item"><a href="#">Resources</a></li>
        </ul>
      </nav>
      <section className="social-links">
        <button className="social-btn"><img className="social-btn-image" src={`./dist/${TwitterIcon}`} alt="twitter icon"/></button>
        <button className="social-btn"><img className="social-btn-image" src={`./dist/${InstagramIcon}`} alt="instagram icon"/></button>
        <button className="social-btn"><img className="social-btn-image" src={`./dist/${GithubIcon}`} alt="github icon"/></button>
        <button className="social-btn"><img className="social-btn-image" src={`./dist/${YouTubeIcon}`} alt="youtube icon"/></button>
      </section>
    </footer>
  );
}

export default Footer;
