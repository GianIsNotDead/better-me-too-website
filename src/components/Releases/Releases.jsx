import React from 'react';

// style
import './style.scss';

// assets
import ReleasesPlaceHolder from '../../assets/release_placeholder.png';

function ReleasesPreview() {
  return (
    <article className="release-preview">
      <h4 className="release-preview-title">Lucid Candy - EEG</h4>
      <p className="release-preview-brief">Here are some explainer text Here are some explainer text Here are some explainer text Here are some explainer text</p>
      <img className="release-preview-image" src={`./dist/${ReleasesPlaceHolder}`} alt="placeholder"/>
      <p className="release-expand">Tap/Click to See the Detail</p>
    </article>
  );
}

function Releases() {
  return (
    <section className="bmt-releases">
      <h3 className="bmt-releases-title">Releases</h3>
      <p className="bmt-releases-description">We build opensource software and hardware to help people understand the brain.</p>
      <ReleasesPreview />
      <button className="bmt-releases-all-btn">See All Releases</button>
    </section>
  );
}

export default Releases;
