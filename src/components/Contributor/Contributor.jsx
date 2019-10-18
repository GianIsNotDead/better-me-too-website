import React from 'react';

// style
import './style.scss';

// assets
import ContributorGian from '../../assets/contributor_gian.png';

function Contributor() {
  return (
    <article className="bmt-contributor">
      <div className="bmt-contributor-image-container">
        <img className="bmt-contributor-image" src={`./dist/${ContributorGian}`} alt="computer illustrated profile image"/>
      </div>
      <div className="bmt-contributor-text-container">
        <div className="bmt-contributor-name-social">
          <div className="bmt-contributor-name-container">
            <p className="bmt-contributor-name">Gian</p>
          </div>
          <div className="bmt-contributor-social-container">
            <a className="bmt-contributor-social" href="">Twitter</a>
            <a className="bmt-contributor-social" href="">Instagram</a>
          </div>
        </div>
        <div className="bmt-contributor-role-container">
          <p className="bmt-contributor-role">Software, Hardware, Design</p>
        </div>
      </div>
    </article>
  );
}

export default Contributor;
