import React from 'react';

// style
import './style.scss';

// static
import WebCopy from '../../constant/web_copy.json';

function Banner() {
  return (
    <section className="bmt-banner">
      <h2 className="bmt-banner-title">{WebCopy['banner-title']}</h2>
      <p className="bmt-banner-text">{WebCopy['banner-text']}</p>
      <a className="bmt-cta-button" href="/suggestions">
        <div className="bmt-cta-accent">
          {WebCopy['banner-button']}
        </div>
      </a>
    </section>
  );
}

export default Banner;
