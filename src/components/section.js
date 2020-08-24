import React from 'react';
import { useSelector } from 'react-redux';

import HeaderTap from './headerTab';
import CardList from './cardlist';
import CardDetail from './carddetail';
import CardTrailer from './cardtrailer';
import '../css/section.css';

const Section = () => {
  const tab = useSelector((state) => state.tab);
  // const testState = useSelector((state) => state);
  // console.log(testState);

  return (
    <section className="section">
      <HeaderTap tab={tab} />
      <CardList tab={tab} />
      <CardDetail />
      <CardTrailer />
    </section>
  );
};

export default Section;
