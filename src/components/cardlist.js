import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import Card from './card';

import '../css/cardlist.css';

const Cardlist = (props) => {
  const dataList = useSelector((state) => state.dataList);
  const [dataIndex, setDataIndex] = useState([]);
  console.log(props);

  const getData = async () => {
    const res = await axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    });
    // console.log(res);
    setDataIndex(res.data.results);
  };

  useEffect(() => {
    if (dataList.length < 1) {
      getData();
    }
  }, [dataList]);

  return (
    <div className="section_cardlist">
      {dataList.length > 1
        ? dataList.map((data) => <Card key={data.id} data={data} />)
        : dataIndex.map((data) => <Card key={data.id} data={data} />)}
    </div>
  );
};

export default Cardlist;
