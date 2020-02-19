import React from 'react';

// style
import './style.scss';

// assets
import TwitterIcon from '../../assets/icon_twitter.svg';
import InstagramIcon from '../../assets/icon_instagram.svg';
import GithubIcon from '../../assets/icon_github.svg';
import YouTubeIcon from '../../assets/icon_youtube.svg';
import MediumIcon from '../../assets/icon_medium.svg';

function Footer() {
  return (
    <footer className="bmt-footer">
      <nav className="footer-nav">
        <ul className="nav-items-container">
          <li className="nav-item"><a className="footer-nav-btn" href="/about">About</a></li>
          <li className="nav-item"><a className="footer-nav-btn" href="/releases">Releases &amp; Milestones</a></li>
          <li className="nav-item"><a className="footer-nav-btn" href="/conversations">Conversations</a></li>
          <li className="nav-item"><a className="footer-nav-btn" href="/resources">Resources</a></li>
        </ul>
      </nav>
      <section className="social-links">
        <a className="social-btn" href="/twitter"><img className="social-btn-image" src={`./dist/${TwitterIcon}`} alt="twitter icon"/></a>
        <a className="social-btn" href="/instagram"><img className="social-btn-image" src={`./dist/${InstagramIcon}`} alt="instagram icon"/></a>
        <a className="social-btn" href="/github"><img className="social-btn-image" src={`./dist/${GithubIcon}`} alt="github icon"/></a>
        <a className="social-btn" href="/youtube"><img className="social-btn-image" src={`./dist/${YouTubeIcon}`} alt="youtube icon"/></a>
        <a className="social-btn" href="/medium"><img className="social-btn-image" src={`./dist/${MediumIcon}`} alt="medium icon"/></a>
      </section>
    </footer>
  );
}

export default Footer;
