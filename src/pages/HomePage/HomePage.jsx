import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import ReleasesPreview from '../../components/ReleasesPreview';
import ConversationsPreview from '../../components/ConversationsPreview';
import ResourcesPreview from '../../components/ResourcesPreview';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

// assets
import BackgroundHome from '../../assets/background_home.svg';

function HomePage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <div className={`gradient-container ${showMobileMenu === true ? 'nav-mobile-active' : ''}`}>
        <Header
          showMobileMenu={showMobileMenu}
          toggleDisplay={toggleDisplay}
        />
        <Banner />
      </div>
      <main className="btm-main">
        <ReleasesPreview />
        <ConversationsPreview />
        <ResourcesPreview />
        <ThoughtsLetter />
        <div className="page-background">
          <img className="page-background-image" src={`./dist/${BackgroundHome}`} alt="geometric background overlay"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
