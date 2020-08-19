import React from 'react';

import HeaderTap from './headerTab';
import CardList from './cardlist';
import CardDetail from './carddetail';
import '../css/section.css';

const Section = () => {
  return (
    <section className="section">
      <HeaderTap />
      <CardList />
      <CardDetail />
    </section>
  );
};

export default Section;
