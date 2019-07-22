import React, { Component } from 'react';

// Assets
import Bean from './assets/bean.svg';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <header className="bmt-header">
          <h1 className="bmt-logo-type">Better Me Too</h1>
          <nav className="bmt-nav">
            <button className="bmt-resources">Resources</button>
          </nav>
        </header>
        <main className="bmt-main">
          <section className="bmt-about-text">
            <p className="bmt-text-normal">We want to explore ways to improve the relationship between human mind and body. We start by brain stimulation and observation (e.g. TMS, tRNS, EEG). Then study concept such as sensory substitution and subconscious learning.</p>
            <p className="bmt-text-normal">We will open-source all the experiments and builds along the way.</p>
            <p className="bmt-text-normal"><span className="bmt-text-important">Meet up for coffee in SF:</span> no.bitter.just.better@gmail.com</p>
          </section>
        </main>
        <div className="bean">
          <img src={`./dist/${Bean}`} alt="cute pink bean like thing holding sign that says you rock"/>
        </div>
        <footer><p className="bmt-text-footer">© Better Me Too 2019</p></footer>
      </div>
    );
  }
}

export default App;
