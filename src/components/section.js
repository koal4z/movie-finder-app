import React from 'react';
import { useSelector } from 'react-redux';

import HeaderTap from './headerTab';
import CardList from './cardlist';
import CardDetail from './carddetail';
import '../css/section.css';

const Section = () => {
  const tab = useSelector((state) => state.tab);
  return (
    <section className="section">
      <HeaderTap tab={tab} />
      <CardList />
      <CardDetail />
    </section>
  );
};

export default Section;
