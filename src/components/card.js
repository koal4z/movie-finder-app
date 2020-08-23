import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// import { ReactComponent as Triangle } from '../images/triangle.svg';

import '../css/card.css';

const Card = (props) => {
  const { data } = props;
  const { title, poster_path: posterPath, id } = data;
  const dispatch = useDispatch();

  const showDetail = async () => {
    const res = await axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    });
    const detailsMovie = { type: 'DETAILS_DATA', details: res.data };
    dispatch(detailsMovie);
  };

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
          <a
            href="/#"
            className="cardItem_box-button button"
            type="button"
            onClick={showDetail}
          >
            Details
          </a>
          {/* <div className="cardItem_box-triangle">
            <Triangle />
          </div> */}
          <button className="cardItem_box-button button" type="button">
            button2
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
