import React from 'react';

import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        2020 &#174; Create by{' '}
        <span>
          <a
            className="footer_link"
            href="https://github.com/koal4z"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koal4z
          </a>
        </span>{' '}
        .
      </p>
      <p>
        powered by{' '}
        <a
          className="footer_link"
          href="https://developers.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDB
        </a>{' '}
        .
      </p>
    </footer>
  );
};

export default Footer;
