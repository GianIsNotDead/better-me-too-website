import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
import ConversationsPreview from '../../components/ConversationsPreview';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

function ConversationsPage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <ConversationsPreview />
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default ConversationsPage;
