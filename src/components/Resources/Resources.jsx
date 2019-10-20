import React from 'react';

// style
import './style.scss';

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

function Resources() {
  return (
    <section className="bmt-resources">
      <h3 className="bmt-resources-title">Resources</h3>
      <p className="bmt-resources-description">Some say that the internet has enough resources for one to learn and become a rocket scientist. Here’re some of the goodies that helped us to level up on science and engineering.</p>
      <ResourcesPreview />
      <button className="bmt-all-resources-btn">See All Resources</button>
    </section>
  );
}

export default Resources;
