import React from 'react';

// style
import './style.scss';

// component
import Header from '../../components/Header';
import ThoughtsLetter from '../../components/ThoughtsLetter';
import Footer from '../../components/Footer';

// assets
import MediumIcon from '../../assets/icon_medium.png';

// fake db
import { conversations } from '../../helpers/imageDB';
import ConversationsList from '../../constant/conversations.json';

function SingleConversationPage({ showMobileMenu, toggleDisplay }) {
  // get conversation title
  let convoQuery = window.location.pathname.split('/')[2].split('-').join(' ');
  let conversation = ConversationsList.filter(c => c.title.toLowerCase() === convoQuery)[0];
  let conversationContent = conversation["content"].map((c, i) => {
    if (c[0] === '!') {
      return (<img className="bmt-single-conversation-image" src={`./dist/${conversations[c.substring(c.indexOf('(') + 1, c.indexOf(')'))]}`} alt={`${c.substring(c.indexOf('[') + 1, c.indexOf(']'))}`} key={'convo'.concat(i)} />);
    }
    return (<p className="bmt-single-conversation-text" key={'convo'.concat(i)}>{c}</p>);
  });
  return (
    <div className="page-container">
      <Header
        theme="dark"
        showMobileMenu={showMobileMenu}
        toggleDisplay={toggleDisplay}
      />
      <main className="bmt-main">
        <section className="bmt-medium-conversation">
          <p className="bmt-medium-text">While we share all the critical information here, please consider checking out a more thorough version on Medium, and send some claps if we earned it. It'll generate some revenue to help us maintain the platform. We really appreciate it.</p>
          <div className="bmt-medium-assets">
            <img className="bmt-medium-logo" src={`./dist/${MediumIcon}`} alt="medium logo" />
            <a href="#" className="bmt-medium-btn">Read It On Medium</a>
          </div>
        </section>
        <section className="bmt-single-conversation">
          <h2 className="bmt-single-conversation-title">{conversation['title']}</h2>
          <p className="bmt-single-conversation-metadata">{`#${conversation['metadata'].join('#')}`}</p>
          {conversationContent}
        </section>
        <ThoughtsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default SingleConversationPage;
