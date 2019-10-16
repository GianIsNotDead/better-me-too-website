import React from 'react';

// style
import './style.scss';

function ThoughtsLetter() {
  return (
    <section className="tl-container">
      <h3 className="thoughts-letter-title">Thoughts Sharing Friday</h3>
      <p className="thoughts-letter-text">We’d love to share our progress, and any interesting concepts we stumble upon. This is our one and only email service, so when you cancel, you cancel for REAL.</p>
      <form className="thoughts-letter-form">
        <input className="thoughts-letter-input" type="text"/>
        <button className="thoughts-letter-submit">yay!</button>
      </form>
      <p className="thoughts-letter-text">Not sure whether you'll like these or not?</p>
      <button className="thoughts-letter-example-btn">See the Sample Email</button>
    </section>
  );
}

export default ThoughtsLetter;
