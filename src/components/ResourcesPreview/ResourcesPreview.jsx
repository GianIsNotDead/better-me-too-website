import React from 'react';

// style
import './style.scss';

// assets
import Incognito from '../../assets/resource_incognito.jpg'

function ResourcesPreview() {
  return (
    <section className="rep-container">
      <h3 className="rep-container-title">Resources</h3>
      <article className="resource-preview">
        <div className="resource-preview-image-container">
          <img className="resource-preview-image" src={`./dist/${Incognito}`} alt="resource"/>
        </div>
        <div className="resource-preview-text-container">
          <h4 className="resource-preview-title">Incognito</h4>
          <p className="resource-preview-text">David Eagleman takes us into a fascinating journey through the unconsious mind. </p>
        </div>
      </article>
      <button className="all-resources-btn">See All Resources</button>
    </section>
  );
}

export default ResourcesPreview;
