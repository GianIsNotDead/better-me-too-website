import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
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
        <section className="contact-container">
          <h3 className="contact-title">Let's Be Friends</h3>
          <p className="contact-text">We like yoga, coffee, nature, and the brain. </p>
          <p className="contact-text">gian@bettermetoo.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
