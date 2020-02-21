import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Releases from '../../components/Releases';
import Conversations from '../../components/Conversations';
import Resources from '../../components/Resources';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

// assets
import BackgroundHome from '../../assets/background_home.svg';

function HomePage({ showMobileMenu, toggleDisplay, setConversationContent, windowWidth }) {
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
