import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../css/carddetail.css';

const CardDetail = () => {
  const [showDetail, setShowDetail] = useState(false);
  const details = useSelector((state) => state.details);
  const {
    title,
    tagline,
    popularity,
    adult,
    runtime,
    revenue,
    status,
    genres,
    overview,
    original_language: originalLang,
    release_date: releaseDate,
    poster_path: posterPath
  } = details;

  useEffect(() => {
    if (details) {
      setShowDetail(true);
    }
  }, [details]);
  const handleClick = () => {
    setShowDetail(false);
  };
  return (
    <>
      {showDetail ? (
        <div className="section_carddetail">
          <div className="carddetail-imagebox">
            <img
              className="carddetail-image"
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt={title}
            />
          </div>
          <div className="carddetail-detailbox">
            <div className="carddetail-detailbox carddetail-detailbox-left">
              <h2>{title}</h2>
              <h6>{tagline}</h6>
              <h4>Detail</h4>
              <hr />
              <p>Original Language : {originalLang}</p>
              <p>popularity : {popularity}</p>
              <p>release date : {releaseDate}</p>
              <p>adult : {adult ? 'Yes' : 'No'}</p>
              <p>runtime : {runtime} min</p>
              <p>revenue : {revenue} $</p>
              <p>status : {status}</p>
            </div>
            <div className="carddetail-detailbox carddetail-detailbox-right">
              <h6>Genres: {genres.map((genre) => genre.name).join(', ')}</h6>
              <h4>Overview</h4>
              <hr />
              <p>{overview}</p>
              <div className="carddetail-detailbox-right">
                <button type="button" className="button">
                  button
                </button>
                <button type="button" className="button">
                  button
                </button>
              </div>
            </div>
            <div className="carddetail-detailbox-x">
              <div role="button" tabIndex={0} onClick={handleClick}>
                &#10006;
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardDetail;
