import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';

function SuggestionsPage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="bmt-suggestions-container">
          <h3 className="bmt-suggestions-title">Recommend Builds and Articles</h3>
          <p className="bmt-suggestions-text">Nothing is too small or too big for us to investigate. Don’t be shy, reach out to us, be part of our research and build process. </p>
          <p className="bmt-suggestions-text">gian@bettermetoo.com</p>
        </section>
      </main>
    </div>
  );
}

export default SuggestionsPage;
