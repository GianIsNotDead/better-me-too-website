import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

function ContactPage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="bmt-contact-container">
          <h3 className="bmt-contact-title">Let's Be Friends</h3>
          <p className="bmt-contact-text">We like yoga, coffee, nature, and the brain. </p>
          <p className="bmt-contact-text">gian@bettermetoo.com</p>
        </section>
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
