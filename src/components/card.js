import React from 'react';
import PropTypes from 'prop-types';
// import { ReactComponent as Triangle } from '../images/triangle.svg';

import '../css/card.css';

const Card = (props) => {
  const { data } = props;
  const { title, poster_path: posterPath } = data;
  return (
    <div className="section_cardlist-cardItem">
      {posterPath ? (
        <img
          className="cardItem_image"
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={`${title}`}
        />
      ) : (
        <div className="no-image">
          <p>No Image</p>
        </div>
      )}
      <div className="cardItem_box">
        <div className="cardItem_box-heading">
          <h6 className="cardItem_box-title">{title}</h6>
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

Card.propTypes = {
  data: PropTypes.object.isRequired
};

export default Card;
