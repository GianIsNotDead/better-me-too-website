import React, { Component } from 'react';

// style
import './style.scss';

// assets
import Hamburger from '../../assets/icon_hamburger.svg';
import HamburgerDark from '../../assets/icon_hamburger_dark.svg';
import Close from '../../assets/icon_close.svg';

class Header extends Component {
  constructor() {
    super();
    this._toggleMobileMenu = this._toggleMobileMenu.bind(this);
  }

  _toggleMobileMenu(e) {
    e.preventDefault();
    const { toggleDisplay } = this.props;
    return toggleDisplay(e.currentTarget.name);
  }

  render() {
    const { theme, route, showMobileMenu } = this.props;
    // choose color theme for the header 
    const HamburgerIcon = theme === 'dark' ? HamburgerDark : Hamburger;
    return (
      <header className={`bmt-header ${showMobileMenu === true ? 'nav-mobile-active' : ''}`}>
        <div className="header-container">
          <h1 className={`logo-text ${theme === 'dark' ? 'logo-text-dark' : 'logo-text-light'}`}>Better Me Too</h1>
          <button className="burger-menu-button" name="showMobileMenu" onClick={this._toggleMobileMenu}>
            <img className="burger-menu" src={`./dist/${showMobileMenu === true ? Close : HamburgerIcon}`} alt="hamburger menu" />
          </button>
        </div>
        <nav className={`header-nav ${showMobileMenu === true ? 'nav-mobile nav-mobile-active' : ''}`}>
          <ul className="nav-items-container">
            <li className="nav-item"><a className="nav-link" href={`${route}/about`}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Releases &amp; Milestones</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Conversations</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
