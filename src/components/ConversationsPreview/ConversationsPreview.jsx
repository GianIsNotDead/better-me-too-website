import React from 'react';

// style
import './style.scss';

// assets
import ConvoExpand from '../../assets/icon_convo_expand.svg';

function ConversationsPreview() {
  return (
    <section className="cp-container">
      <h3 className="cp-container-title">Conversations</h3>
      <p className="cp-container-text">We find interesting concepts, research, and experiments, deliver them in an undiluted yet digestible way.</p>
      <article className="conversation-preview">
        <div className="conversation-title-container">
          <div className="conversation-date-container">
            <div className="conversation-date">
              <p className="conversation-month">09/28</p>
              <p className="conversation-year">2019</p>
            </div>
          </div>
          <div className="conversation-title">
            <div className="conversation-title-text-container">
              <h4 className="conversation-title-text">Memory Inheritance</h4>
              <p className="conversation-metadata">#epigenetics #methylation</p>
            </div>
          </div>
          <div className="conversation-expand">
            <img className="conversation-expand-icon" src={`./dist/${ConvoExpand}`} alt="expand article"/>
          </div>
        </div>
        <div className="conversation-preview-text-container">
          <p className="conversation-preview-text">In this article, we explore a non-traditional memory pathway. How memory is passed down from generation to generation.</p>
        </div>
      </article>
      <button className="all-conversations-btn">See All Conversations</button>
    </section>
  )
}

export default ConversationsPreview;
