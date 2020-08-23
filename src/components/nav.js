import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { ReactComponent as Search } from '../images/search.svg';
import '../css/nav.css';

const Nav = () => {
  const dispatch = useDispatch();

  const tab1 = { type: 'SELECT_TAB', tab: 'Now Playing' };
  const tab2 = { type: 'SELECT_TAB', tab: 'Popular' };
  const tab3 = { type: 'SELECT_TAB', tab: 'Top Rated' };
  const tab4 = { type: 'SELECT_TAB', tab: 'Upcomming' };

  const [isToggle, setIstoggle] = useState(false);
  const [searchBar, setSearchbar] = useState(false);
  const [input, setInput] = useState('');

  const handleHambergur = (e) => {
    const el = e.target;
    const className = ['hamburger', 'line1', 'line2', 'line3', 'hamburger switch'];

    if (className.indexOf(el.className) !== -1) {
      if (!isToggle) {
        setIstoggle(true);
      } else {
        setIstoggle(false);
      }
    }
  };

  const getQuery = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const res = await axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`
    });

    if (res.data.results.length < 1) {
      console.log('not found your query movie');
    }
    const queryData = { type: 'QUERY_DATA', dataList: res.data.results };
    dispatch(queryData);
  };

  const handlerSearchBar = () => {
    if (input) {
      getQuery();
      setInput('');
      return;
    }
    if (!searchBar) {
      setSearchbar(true);
    } else {
      setSearchbar(false);
    }
  };
  const handlerChange = (e) => {
    e.preventDefault();

    const { value } = e.target;
    setInput(value);
  };

  const handlerKey = (e) => {
    if (e.key === 'Enter') {
      if (input) {
        getQuery();
        setInput('');
        return;
      }
      setSearchbar(false);
    }
  };

  return (
    <nav className={`nav${isToggle ? ' showmenu' : ''}`}>
      <div className="nav_navzone">
        <h3 className="logo">Movie finder</h3>
        <div className="search">
          {searchBar ? (
            <input
              className="search-input"
              type="text"
              placeholder="Search your movies"
              onChange={handlerChange}
              onKeyDown={handlerKey}
              value={input}
            />
          ) : null}
          <Search onClick={handlerSearchBar} />
        </div>
        <div
          role="button"
          tabIndex={0}
          className={`hamburger${isToggle ? ' switch' : ''}`}
          onClick={handleHambergur}
        >
          <div className="line1"> </div>
          <div className="line2"> </div>
          <div className="line3"> </div>
        </div>
      </div>

      <div className={`menubar${isToggle ? ' showmenu' : ''}`}>
        <ul className="menubar_menu">
          <li className="menubar_menu-item" onClick={() => dispatch(tab1)}>
            <a href="/#">Now Playing</a>
          </li>
          <li className="menubar_menu-item" onClick={() => dispatch(tab2)}>
            <a href="/#">Popular</a>
          </li>
          <li className="menubar_menu-item" onClick={() => dispatch(tab3)}>
            <a href="/#">Top Rated</a>
          </li>
          <li className="menubar_menu-item" onClick={() => dispatch(tab4)}>
            <a href="/#">Upcomming</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
