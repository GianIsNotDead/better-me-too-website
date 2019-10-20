import React from 'react';

// style
import './style.scss';

function ConversationsPreview() {
  return (
    <article className="conversation-preview">
      <div className="conversation-title-container">
        <div className="conversation-date-container">
          <div className="conversation-date-center">
            <p className="conversation-month">09/28</p>
            <p className="conversation-year">2019</p>
          </div>
        </div>
        <div className="conversation-title">
          <div className="conversation-title-center">
            <h4 className="conversation-title-text">Memory Inheritance</h4>
            <p className="conversation-metadata">#epigenetics #methylation</p>
          </div>
        </div>
      </div>
      <div className="conversation-text-container">
        <p className="conversation-text">In this article, we explore a non-traditional memory pathway. How memory is passed down from generation to generation.</p>
        <button className="conversation-full-btn">See Full Article</button>
      </div>
    </article>
  )
}

function Conversations() {
  return (
    <section className="bmt-conversations">
      <h3 className="bmt-conversations-title">Conversations</h3>
      <p className="bmt-conversations-description">We find interesting concepts, research, and experiments, deliver them in an undiluted yet digestible way.</p>
      <ConversationsPreview />
      <button className="all-conversations-btn">See All Conversations</button>
    </section>
  );
}

export default Conversations;
