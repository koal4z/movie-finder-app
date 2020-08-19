import React from 'react';

import '../css/carddetail.css';

const CardDetail = () => {
  return (
    <div className="section_carddetail">
      <div className="carddetail-imagebox">
        <img
          className="carddetail-image"
          src="https://dummyimage.com/500x750/949494/000000.png"
          alt=".."
        />
      </div>
      <div className="carddetail-detailbox">
        <div className="carddetail-detailbox carddetail-detailbox-left">
          <h2>Fight Club</h2>
          <h6>Mischief. Mayhem. Soap.</h6>
          <h4>Detail</h4>
          <hr />
          <p>Original Language : en</p>
          <p>popularity : 7.35</p>
          <p>release date : 2012-04-25</p>
          <p>adult : No</p>
          <p>runtime : 139 min</p>
          <p>revenue : 100,853,753 $</p>
          <p>status : Released</p>
        </div>
        <div className="carddetail-detailbox carddetail-detailbox-right">
          <h6>Genres: Drama</h6>
          <h4>Overview</h4>
          <hr />
          <p>
            A ticking-time-bomb insomniac and a slippery soap salesman channel primal
            male aggression into a shocking new form of therapy. Their concept
            catches on, with underground &quot;fight clubs&quot; forming in every
            town, until an eccentric gets in the way and ignites an out-of-control
            spiral toward oblivion.
          </p>
        </div>
        <div className="carddetail-detailbox-x">
          <div>&#10006;</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
