import React from 'react';

// style
import './style.scss';

// constant
import WebCopy from '../../constant/web_copy.json';

function ThoughtsLetter() {
  return (
    <section className="tl-container">
      <h3 className="thoughts-letter-title">{WebCopy['thoguhtsletter-title']}</h3>
      <p className="thoughts-letter-text">{WebCopy['thoughtsletter-text']['description']}</p>
      <form className="thoughts-letter-form">
        <input className="thoughts-letter-input" type="text"/>
        <button className="thoughts-letter-submit">{WebCopy['thoughtsletter-button']["email"]}</button>
      </form>
      <p className="thoughts-letter-text">{WebCopy['thoughtsletter-text']['affirmation']}</p>
      <button className="thoughts-letter-example-btn">{WebCopy['thoughtsletter-button']["sample-email"]}</button>
    </section>
  );
}

export default ThoughtsLetter;
