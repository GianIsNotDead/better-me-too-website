import React from 'react';

// style
import './style.scss';

// static
import WebCopy from '../../constant/web_copy.json';
import ConversationsList from '../../constant/conversations.json';

function ConversationsPreview({ title, metadata, date, content }) {
  let FormatedMetadata = metadata.map(m => '#'.concat(m)).join(' ');
  return (
    <article className="conversation-preview">
      <div className="conversation-title-container">
        {/* Release Date Box */}
        <div className="conversation-date-container">
          <div className="conversation-date-center">
            <p className="conversation-month">{date.substring(0, 5)}</p>
            <p className="conversation-year">{date.substring(6, date.length)}</p>
          </div>
        </div>
        {/* End Release Date Box */}
        {/* Title Box */}
        <div className="conversation-title">
          <div className="conversation-title-center">
            <h4 className="conversation-title-text">{title}</h4>
            <p className="conversation-metadata">{FormatedMetadata}</p>
          </div>
        </div>
        {/* End Title Box */}
      </div>
      <div className="conversation-text-container">
        <p className="conversation-text">{content[0].substring(0, 130).concat('...')}</p>
        <a className="conversation-full-btn" href={`/conversations/${title.toLowerCase().split(' ').join('-')}`}>See Full Article</a>
      </div>
    </article>
  )
}

function Conversations({ btn }) {
  let ConvoComponent = ConversationsList.map((convo, i) => (
    <ConversationsPreview
      title={convo["title"]}
      metadata={convo["metadata"]}
      date={convo["date"]}
      content={convo["content"]}
      key={'convo'.concat(i)}
    />
  ));
  return (
    <section className="bmt-conversations">
      <h3 className="bmt-conversations-title">{WebCopy['conversations-title']}</h3>
      <p className="bmt-conversations-description">{WebCopy['conversations-description']}</p>
      {ConvoComponent}
      { btn !== undefined &&
        <button className="bmt-conversations-btn" onClick={btn.func}>{btn.name}</button>
      }
    </section>
  );
}

export default Conversations;
