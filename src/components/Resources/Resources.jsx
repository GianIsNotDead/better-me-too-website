import React from 'react';

// style
import './style.scss';

// static
import WebCopy from '../../constant/web_copy.json';

// assets
import Incognito from '../../assets/resource_incognito.jpg'

function ResourcesPreview() {
  return (
    <article className="resource-preview">
      <div className="resource-preview-image-container">
        <img className="resource-preview-image" src={`./dist/${Incognito}`} alt="resource"/>
      </div>
      <div className="resource-preview-text-container">
        <h4 className="resource-preview-title">Incognito</h4>
        <p className="resource-preview-text">David Eagleman takes us into a fascinating journey through the unconsious mind. </p>
        <a className="resource-preview-redirect" href="#">See Detail (Redirect)</a>
      </div>
    </article>
  );
}

function Resources({ btn }) {
  return (
    <section className="bmt-resources">
      <h3 className="bmt-resources-title">{WebCopy['resources-title']}</h3>
      <p className="bmt-resources-description">{WebCopy['resources-description']}</p>
      <ResourcesPreview />
      { btn !== undefined &&
        <button className="bmt-resources-btn" onClick={btn.func}>{btn.name}</button>
      }
    </section>
  );
}

export default Resources;
