import React from 'react';
// import { ReactComponent as Triangle } from '../images/triangle.svg';

import '../css/card.css';

const Card = () => {
  return (
    <div className="section_cardlist-cardItem">
      <img
        className="cardItem_image"
        src="https://dummyimage.com/500x750/949494/000000.png"
        alt=".."
      />
      <div className="cardItem_box">
        <div className="cardItem_box-heading">
          <h5 className="cardItem_box-title">title movie</h5>
        </div>
        <div className="cardItem_box-side">
          <button className="cardItem_box-button button" type="button">
            button1
          </button>
          {/* <div className="cardItem_box-triangle">
            <Triangle />
          </div> */}
          <button className="cardItem_box-button button" type="button">
            button3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
