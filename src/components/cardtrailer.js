import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/carddetail.css';
import '../css/cardtrailer.css';

const CardTrailer = () => {
  const [showDetail, setShowDetail] = useState(false);
  const trailers = useSelector((state) => state.trailers);
  useEffect(() => {
    if (trailers) {
      setShowDetail(true);
    }
  }, [trailers]);

  const handleClick = () => {
    setShowDetail(false);
  };
  return (
    <>
      {showDetail ? (
        <div className="body-detail body_section_cardvideo">
          <div className="section_carddetail section_cardvideo">
            <button
              type="button"
              onClick={handleClick}
              className="section_cardvideo-x button"
            >
              {' '}
            </button>
            <div className="section_cardvideo-video">
              <iframe
                width="560"
                height="349"
                title={trailers[trailers.length - 1].name}
                src={`https://www.youtube.com/embed/${
                  trailers[trailers.length - 1].key
                }`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
                <p>Cannot Show This Trailer</p>
              </iframe>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardTrailer;
