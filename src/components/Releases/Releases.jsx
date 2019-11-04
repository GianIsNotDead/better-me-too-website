import React from 'react';

// style
import './style.scss';

// constant
import WebCopy from '../../constant/web_copy.json';
import ReleasesList from '../../constant/releases.json';

// assets
import { releases as rDB } from '../../helpers/imageDB';

function ReleasesPreview({projectName, previewImage, content}) {
  return (
    <article className="release-preview">
      <a className="release-full-btn" href={`/releases/${projectName.toLowerCase().split(' ').join('-')}`}></a>
      <h4 className="release-preview-title">{projectName}</h4>
      <p className="release-preview-brief">{content[0].substring(0, 150).concat('...')}</p>
      <img className="release-preview-image" src={`./dist/${rDB[previewImage.substring(previewImage.indexOf('(') + 1, previewImage.indexOf(')'))]}`} alt={previewImage.substring(previewImage.indexOf('[') + 1, previewImage.indexOf(']'))} />
      <p className="release-expand">Tap/Click to See the Detail</p>
    </article>
  );
}

function Releases({ btn }) {
  let ReleaseComponent = ReleasesList.map((release, i) => (
    <ReleasesPreview
      projectName={release['project-name']}
      previewImage={release['preview-image']}
      content={release['content']}
      key={'release-preview'.concat(i)}
    />
  ));
  return (
    <section className="bmt-releases">
      <h3 className="bmt-releases-title">{WebCopy['releases-title']}</h3>
      <p className="bmt-releases-description">{WebCopy['releases-description']}</p>
      {ReleaseComponent}
      { btn !== undefined &&
        <button className="bmt-releases-btn" onClick={btn.func}>{btn.name}</button>
      }
    </section>
  );
}

export default Releases;
