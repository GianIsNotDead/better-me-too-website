import React, { Component } from 'react';

// helpers
import SonicHedgehog from './helpers/SonicHedgehog';

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
    return new SonicHedgehog().makeRoutes({
      '/': () => (
        <HomePage
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
        />
      ),
      '/about': () => (
        <AboutPage
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
        />
      ),
      '/releases': () => (
        <ReleasesPage
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
        />
      ),
      '/conversations': () => (
        <ConversationsPage
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
        />
      ),
      '/resources': () => (
        <ResourcesPage
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
        />
      ),
      '/contact': () => (
        <ContactPage
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
        />
      ),
      '/suggestions': () => (
        <SuggestionsPage
          route={this.state.route}
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
        />
      ),
    });
  }
}

export default App;
