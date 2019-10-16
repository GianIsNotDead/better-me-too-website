import React, { Component } from 'react';

// style
import './style.scss';

// assets
import Releases from '../../assets/release_placeholder.png';

function ReleasesPreview() {
  return (
    <section className="rp-container">
      <h3 className="rp-container-title">Releases</h3>
      <p className="rp-container-text">We build opensource software and hardware to help people understand the brain.</p>
      <article className="release-preview">
        <h4 className="release-preview-title">Lucid Candy - EEG</h4>
        <p className="release-preview-brief">Here are some explainer text Here are some explainer text Here are some explainer text Here are some explainer text</p>
        <img className="release-preview-image" src={`./dist/${Releases}`} alt="placeholder"/>
        <p className="release-expand">Tap/Click to See the Detail</p>
      </article>
      <button className="all-release-btn">See All Releases</button>
    </section>
  );
}

export default ReleasesPreview;
