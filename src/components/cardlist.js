import React from 'react';

import Card from './card';

import '../css/cardlist.css';

const Cardlist = () => {
  return (
    <div className="section_cardlist">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cardlist;
