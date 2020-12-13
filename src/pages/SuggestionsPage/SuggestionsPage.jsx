import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function SuggestionsPage({ route, showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        route={route}
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="suggestions-container">
          <h3 className="suggestions-title">Recommend Builds and Articles</h3>
          <p className="suggestions-text">Nothing is too small or too big for us to investigate. Don’t be shy, reach out to us, be part of our research and build process. </p>
          <p className="suggestions-text">gian@bettermetoo.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SuggestionsPage;
