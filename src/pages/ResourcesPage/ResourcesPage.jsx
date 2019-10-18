import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import ResourcesPreview from '../../components/ResourcesPreview';
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
        <ResourcesPreview />
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default ResourcesPage;
