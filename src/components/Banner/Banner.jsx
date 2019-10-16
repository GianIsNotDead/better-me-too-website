import React, { Component } from 'react';

// style
import './style.scss';

class Banner extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="bmt-banner">
        <h2 className="bmt-banner-title">Open Source Brain</h2>
        <p className="bmt-banner-text">We hope to accelerate the understanding of the brain by delivering intriguing, undiluted builds (software &amp; hardware), contents (articles), and resources (books &amp; videos) to everyone, so they have the tools to ask questions, conduct experiments and make positive progress in healthcare. </p>
        <button className="bmt-cta-button">
          <div className="bmt-cta-accent">
            Recommend Builds &amp; Articles
          </div>
        </button>
      </section>
    )
  }
}

export default Banner;
