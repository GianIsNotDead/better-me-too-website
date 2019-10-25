import React from 'react';

// style
import './style.scss';

function Contributor({ name, role, image, socials }) {
  const Socials = socials.map((t, i) => (
    <a className="bmt-contributor-social" href={t['link']} key={'social'.concat(i)}>{t['platform']}</a>
  ));
  return (
    <article className="bmt-contributor">
      <div className="bmt-contributor-image-container">
        <img className="bmt-contributor-image" src={`./dist/${image}`} alt="computer illustrated profile image"/>
      </div>
      <div className="bmt-contributor-text-container">
        <div className="bmt-contributor-name-social">
          <div className="bmt-contributor-name-container">
            <p className="bmt-contributor-name">{name}</p>
          </div>
          <div className="bmt-contributor-social-container">
            {Socials}
          </div>
        </div>
        <div className="bmt-contributor-role-container">
          <p className="bmt-contributor-role">{role}</p>
        </div>
      </div>
    </article>
  );
}

export default Contributor;
