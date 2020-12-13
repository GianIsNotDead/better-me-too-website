import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// fake db
import { releases as rDB } from '../../helpers/imageDB';
import ReleasesList from '../../constant/releases.json';

// helper
import ReadMD from '../../helpers/ReadMD';

function SingleReleasePage({ showMobileMenu, toggleDisplay }) {
  // get release title
  let releasesQuery = window.location.pathname.split('/')[2].split('-').join(' ');
  let release = ReleasesList.filter(r => r['project-name'].toLowerCase() === releasesQuery)[0];
  let releasePreviewImage = release['preview-image'];
  let releaseContent = release["content"].map((r, i) => {
    if (r[0] === '!') {
      return (<img className="bmt-single-release-image" src={`./dist/${rDB[r.substring(r.indexOf('(') + 1, r.indexOf(')'))]}`} alt={`${r.substring(r.indexOf('[') + 1, r.indexOf(']'))}`} key={'single-release'.concat(i)} />);
    }
    if (r.substring(0, 2) === '##') {
      return (
        <h2 className="bmt-single-release-title" key={'single-release'.concat(i)}>{r.substring(2, r.length)}</h2>
      );
    }
    return (<p className="bmt-single-release-text" key={'single-release'.concat(i)}>{r}</p>);
  });
  let releaseComp = new ReadMD(release["content"].join(), rDB, {
    h2: 'bmt-single-release-title',
    img: 'bmt-single-release-image',
    p: 'bmt-single-release-text',
    a: 'bmt-single-release-link',
  }).parse();
  console.log('releasesComp: ', releaseComp);
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="bmt-single-release">
          <h2 className="bmt-single-release-name">{release['project-name']}</h2>
          <p className="bmt-single-release-author">Author: {release['author']}</p>
          <img className="bmt-single-release-preview-image" src={`./dist/${rDB[releasePreviewImage.substring(releasePreviewImage.indexOf('(') + 1, releasePreviewImage.indexOf(')'))]}`} alt={releasePreviewImage.substring(releasePreviewImage.indexOf('[') + 1, releasePreviewImage.indexOf(']'))} />
          <p className="bmt-single-release-description">{release['brief-description']}</p>
          {releaseContent}
          {releaseComp}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SingleReleasePage;
