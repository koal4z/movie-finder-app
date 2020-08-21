import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Search } from '../images/search.svg';
import '../css/nav.css';

const Nav = () => {
  const dispatch = useDispatch();

  const tab1 = { type: 'SELECT_TAB', tab: 'link1' };
  const tab2 = { type: 'SELECT_TAB', tab: 'link2' };
  const tab3 = { type: 'SELECT_TAB', tab: 'link3' };
  const tab4 = { type: 'SELECT_TAB', tab: 'link4' };

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

  const handlerSearchBar = () => {
    if (input) {
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
            <a href="/#">link1</a>
          </li>
          <li className="menubar_menu-item" onClick={() => dispatch(tab2)}>
            <a href="/#">link2</a>
          </li>
          <li className="menubar_menu-item" onClick={() => dispatch(tab3)}>
            <a href="/#">link3</a>
          </li>
          <li className="menubar_menu-item" onClick={() => dispatch(tab4)}>
            <a href="/#">link4</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
