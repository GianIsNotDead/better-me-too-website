import React from 'react';

// style
import './style.scss';

// assets
import Incognito from '../../assets/resource_incognito.jpg'

function ResourcesPreview() {
  return (
    <section className="rep-container">
      <h3 className="rep-container-title">Resources</h3>
      <p className="rep-container-text">Some say that the internet has enough resources for one to learn and become a rocket scientist. Here’re some of the goodies that helped us to level up on science and engineering.</p>
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
