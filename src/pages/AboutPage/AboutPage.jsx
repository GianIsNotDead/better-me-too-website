import React from 'react';

// style
import './style.scss';

// components
import Header from '../../components/Header';
import Contributor from '../../components/Contributor';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

// static
import WebCopy from '../../constant/web_copy.json';

// assets
import ContributorGian from '../../assets/contributor_gian.png';

function AboutPage({ showMobileMenu, toggleDisplay }) {
  const EthicsText = WebCopy['about-ethics-text'].map((t, i) => (
    <article className="bmt-ethics-text-container" key={'ethics'.concat(i)}>
      <p className="bmt-ethics-text-title">{t['title']}</p>
      <p className="bmt-ethics-text">{t['text']}</p>
    </article>
  ));
  const FaqText = WebCopy['about-faq-text'].map((t, i) => (
    <article className="bmt-faq-container" key={'faq'.concat(i)}>
      <p className="bmt-faq-question">{t['question']}</p>
      <p className="bmt-faq-answer">{t['answer']}</p>
    </article>
  ));
  const Contributors = WebCopy["about-contributors"].map((t, i) => (
    <Contributor
      name={t['name']}
      role={t['role']}
      image={ContributorGian}
      socials={t['socials']}
      key={'social'.concat(i)}
    />
  ));
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="bmt-mission">
          <h3 className="bmt-mission-title">{WebCopy['about-mission-title']}</h3>
          <p className="bmt-mission-text">{WebCopy['about-mission-text']}</p>
        </section>
        <section className="bmt-ethics">
          <h3 className="bmt-ethics-title">{WebCopy['about-ethics-title']}</h3>
          {EthicsText}
        </section>
        <section className="bmt-disclaimer">
          <h3 className="bmt-disclaimer-title">{WebCopy['about-disclaimer-title']}</h3>
          <p className="bmt-disclaimer-text">{WebCopy['about-disclaimer-text-tltr']}</p>
          <p className="bmt-disclaimer-text">{WebCopy['about-disclaimer-text']}</p>
        </section>
        <section className="bmt-contributors">
          <h3 className="bmt-contributors-title">Contributors</h3>
          {Contributors}
        </section>
        <section className="bmt-faq">
          <h3 className="bmt-faq-title">FAQ</h3>
          {FaqText}
        </section>
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
