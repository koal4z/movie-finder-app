import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import Card from './card';

import '../css/cardlist.css';

const Cardlist = (props) => {
  const dataList = useSelector((state) => state.dataList);
  const [dataIndex, setDataIndex] = useState([]);
  const { tab } = props;

  const getData = async (type) => {
    type = type.toLowerCase().replace(' ', '_');

    const res = await axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    });
    // console.log(res);
    setDataIndex(res.data.results);
  };

  useEffect(() => {
    if (dataList.length < 1) {
      getData(tab);
    }
  }, [dataList, tab]);

  return (
    <div className="section_cardlist">
      {dataList.length > 1
        ? dataList.map((data) => <Card key={data.id} data={data} />)
        : dataIndex.map((data) => <Card key={data.id} data={data} />)}
    </div>
  );
};

Cardlist.propTypes = {
  tab: PropTypes.string.isRequired
};

export default Cardlist;
