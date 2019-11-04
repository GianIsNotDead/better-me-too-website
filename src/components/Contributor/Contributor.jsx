import React from 'react';

// style
import './style.scss';

// assets
import { about } from '../../helpers/imageDB';

function Contributor({ name, role, image, socials }) {
  let imageAlt = image.substring(image.lastIndexOf('[') + 1, image.lastIndexOf(']'));
  let imageLink = image.substring(image.lastIndexOf('(') + 1, image.lastIndexOf(')'));
  const Socials = socials.map((t, i) => (
    <a className="bmt-contributor-social" href={t.substring(t.indexOf('(') + 1, t.indexOf(')'))} key={'social'.concat(i)}>{t.substring(t.indexOf('[') + 1, t.indexOf(']'))}</a>
  ));
  return (
    <article className="bmt-contributor">
      <div className="bmt-contributor-image-container">
        <img className="bmt-contributor-image" src={`./dist/${about[imageLink]}`} alt={imageAlt}/>
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
