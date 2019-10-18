import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
import ReleasesPreview from '../../components/ReleasesPreview';
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
        <section className="bmt-releases">
          <ReleasesPreview />
        </section>
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default ReleasesPage;
