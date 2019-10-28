import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

// assets
import ReleasePlaceholder from '../../assets/release_placeholder.png';

function SingleConversationPage({ showMobileMenu, toggleDisplay }) {
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="bmt-medium-conversation">
          <p></p>
        </section>
        <section className="bmt-single-conversation">
          <h2 className="bmt-single-conversation-title">Hello</h2>
          <p className="bmt-single-conversation-metadata">#hello #whatup</p>
          <p className="bmt-single-conversation-text">asdnglksajdhfiaush dfoiauh soidufh oaisduhf oiasudhf oiaushdo ifhuasodiufh oaisudhf oiaushd foiuhasdoi fuhasoiduhf oaisuhdf oiuashdofi uhaosuhdf oaushdf ouhasdofu hasoduhf oasuhd ofiauhsdo iufhaosiu dhofiuha oiusdh f</p>
          <img className="bmt-single-conversation-image" src={`./dist/${ReleasePlaceholder}`} alt="this is a placeholder"/>
          <p className="bmt-single-conversation-text">asdnglksajdhfiaush dfoiauh soidufh oaisduhf oiasudhf oiaushdo ifhuasodiufh oaisudhf oiaushd foiuhasdoi fuhasoiduhf oaisuhdf oiuashdofi uhaosuhdf oaushdf ouhasdofu hasoduhf oasuhd ofiauhsdo iufhaosiu dhofiuha oiusdh f</p>
        </section>
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default SingleConversationPage;
