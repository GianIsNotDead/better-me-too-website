import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import Releases from '../../components/Releases';
import Conversations from '../../components/Conversations';
import Resources from '../../components/Resources';
import Footer from '../../components/Footer';

// assets
import BackgroundHome from '../../assets/background_home.svg';
import BannerFace from '../../assets/banner_face.png';

function HomePage({ showMobileMenu, toggleDisplay, setConversationContent, windowWidth }) {
  return (
    <div className="page-container">
      <div className={`gradient-container ${showMobileMenu === true ? 'nav-mobile-active' : ''}`}>
        <Header
          showMobileMenu={showMobileMenu}
          toggleDisplay={toggleDisplay}
        />
        <section className="bmt-banner">
          <div className="bmt-banner-left">
            <h2 className="bmt-banner-title">Open Source Hardware</h2>
            <p className="bmt-banner-text">We’re a group of tinkerers on a journey to discover the power of the brain, and we build open source hardwares/softwares to support our exploration.</p>
            <a className="bmt-cta-button" href="/suggestions">Tell us what we should build next</a>
          </div>
          <div className="bmt-banner-right">
            <img className="bmt-banner-img" src={`./dist/${BannerFace}`} alt="" />
          </div>
        </section>
      </div>
      <main className="btm-main">
        <Releases
          btn={{
            name: 'See All Releases',
            func: () => window.location.href = '/releases',
          }}
          windowWidth={windowWidth}
        />
        <Conversations
          btn={{
            name: 'See All Conversations',
            func: () => window.location.href = '/conversations',
          }}
          setConversationContent={setConversationContent}
        />
        <Resources
          btn={{
            name: 'See All Resources',
            func: () => window.location.href = '/resources',
          }}
          windowWidth={windowWidth}
        />
        <div className="page-background">
          <img className="page-background-image" src={`./dist/${BackgroundHome}`} alt="geometric background overlay"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
