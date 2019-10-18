import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
import Contributor from '../../components/Contributor';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

function AboutPage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="bmt-mission">
          <h3 className="bmt-mission-title">Mission</h3>
          <p className="bmt-mission-text">We hope to accelerate the understanding of the brain by delivering intriguing, undiluted builds, contents, and resources to everyone, so they have the tools to ask questions, conduct experiments and make positive progress in healthcare. </p>
        </section>
        <section className="bmt-ethics">
          <h3 className="bmt-ethics-title">Ethics</h3>
          <p className="bmt-ethics-text"></p>
        </section>
        <section className="bmt-disclaimer">
          <h3 className="bmt-disclaimer-title">Disclaimer</h3>
          <p className="bmt-disclaimer-text">Science and engineering are not always straight forward, so please enjoy it with a healthy dose of skepticism.</p>
          <p className="bmt-disclaimer-text">The materials published on this platform are not intended for medical advice, diagnosis nor treatment. Please always consult healthcare professionals for any medical conditions. We try our best to thoroughly validate the published materials. However, we make no warranties, expressed or implied, regarding errors or omissions and assumes no legal liability or responsibility for loss or damage resulting from the use of the information contained within. </p>
        </section>
        <section className="bmt-contributors">
          <h3 className="bmt-contributors-title">Contributors</h3>
          <Contributor />
        </section>
        <section className="bmt-faq">
          <h3 className="bmt-faq-title">FAQ</h3>
          <article className="bmt-faq-container">
            <p className="bmt-faq-question">What the fact is this?</p>
            <p className="bmt-faq-answer">We are professionals and hobbyists on a journey to learn more about the brain. We see no reason to keep it all to ourselves, so we talk about them on this platform, hoping that the contents have some value to others.</p>
          </article>
        </section>
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
