import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import Resources from '../../components/Resources';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

function ResourcesPage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <Resources />
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default ResourcesPage;
