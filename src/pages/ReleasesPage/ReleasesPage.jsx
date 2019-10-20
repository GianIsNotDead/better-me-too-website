import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
import Releases from '../../components/Releases';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

function ReleasesPage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <Releases />
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default ReleasesPage;
