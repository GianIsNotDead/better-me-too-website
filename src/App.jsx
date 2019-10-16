import React, { Component } from 'react';

// pages
import HomePage from './pages/HomePage';

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
   * @param {string} item refers to a key in the state. i.e 'showMobileMenu', usually elements trigger event will have a name attribute, and it correlates to items in state. i.e <button name="showMobileMenu">
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
  }
}

export default App;
