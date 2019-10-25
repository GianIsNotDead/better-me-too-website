import React from 'react';

// style
import './style.scss';

// constant
import WebCopy from '../../constant/web_copy.json';

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

function Releases({ btn }) {
  console.log(btn)
  return (
    <section className="bmt-releases">
      <h3 className="bmt-releases-title">{WebCopy['releases-title']}</h3>
      <p className="bmt-releases-description">{WebCopy['releases-description']}</p>
      <ReleasesPreview />
      { btn !== undefined &&
        <button className="bmt-releases-btn" onClick={btn.func}>{btn.name}</button>
      }
    </section>
  );
}

export default Releases;
