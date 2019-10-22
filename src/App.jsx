import React, { Component } from 'react';

// pages
import HomePage from './pages/HomePage';
import ReleasesPage from './pages/ReleasesPage';
import ConversationsPage from './pages/ConversationsPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SuggestionsPage from './pages/SuggestionsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      // Header
      showMobileMenu: false,
      route: null,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  // UI render section
  /**
   * @param {string} item
   */
  toggleDisplay(item) {
    const display = this.state[item] === true ? false : true;
    return this.setState({ [item]: display });
  }

  render() {
    return (
      <HomePage
        showMobileMenu={this.state.showMobileMenu}
        toggleDisplay={this.toggleDisplay}
      />
    );
      // <ReleasesPage
      //   showMobileMenu={this.state.showMobileMenu}
      //   toggleDisplay={this.toggleDisplay}
      // />
      // <ConversationsPage
      //   showMobileMenu={this.state.showMobileMenu}
      //   toggleDisplay={this.toggleDisplay}
      // />
      // <ResourcesPage
      //   showMobileMenu={this.state.showMobileMenu}
      //   toggleDisplay={this.toggleDisplay}
      // />
      // <AboutPage
      //   showMobileMenu={this.state.showMobileMenu}
      //   toggleDisplay={this.toggleDisplay}
      // />
      // <ContactPage
      //   showMobileMenu={this.state.showMobileMenu}
      //   toggleDisplay={this.toggleDisplay}
      // />
      // <SuggestionsPage
      //   route={this.state.route}
      //   showMobileMenu={this.state.showMobileMenu}
      //   toggleDisplay={this.toggleDisplay}
      // />
  }
}

export default App;
