import React, { Component } from 'react';

// Style import
import './style/reset.css';
import './style/style.scss';

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
import SingleConversationPage from './pages/SingleConversationPage';
import SingleReleasePage from './pages/SingleReleasePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      // Screen Component
      windowWidth: window.innerWidth,
      // Header
      showMobileMenu: false,
      // SingleConversationPage
      conversationTitle: null,
      conversationMetadata: null,
      conversationDate: null,
      conversationContent: null,
      conversationReference: null,
    };
    this.setConversationContent = this.setConversationContent.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  /**
   * @param {string} title
   * @param {array} metadata ['#metadata', '#metadata']
   * @param {array} content ['paragraph', '[imagename](imageurl)']
   * @param {array} reference ['https://somereference.com']
   */
  setConversationContent(title, metadata, date, content, reference) {
    return this.setState({
      conversationTitle: title,
      conversationMetadata: metadata,
      conversationContent: content,
      conversationReference: reference,
    }, () => console.log(this.state));
  }

  // UI render section
  /**
   * @param {string} item
   */
  toggleDisplay(item) {
    const display = this.state[item] === true ? false : true;
    return this.setState({ [item]: display });
  }

  // Life Cycle
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ windowWidth: window.innerWidth }, () => {
        console.log('windowWith: ', this.state.windowWidth);
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.setState({ windowWidth: window.innerWidth });
    });
  }

  render() {
    return new SonicHedgehog().makeRoutes({
      '/': () => (
        <HomePage
          showMobileMenu={this.state.showMobileMenu}
          toggleDisplay={this.toggleDisplay}
          setConversationContent={this.setConversationContent}
          windowWidth={this.state.windowWidth}
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
      '/releases/:project-name': () => (
        <SingleReleasePage
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
      '/conversations/:title': () => (
        <SingleConversationPage
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
