import React, { useState } from 'react';

import '../css/nav.css';

const Nav = () => {
  const [isToggle, setIstoggle] = useState(false);
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
  return (
    <nav className={`nav${isToggle ? ' showmenu' : ''}`}>
      <div className="nav_navzone">
        <h3 className="logo">Movie finder</h3>
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
          <li className="menubar_menu-item">
            <a href="/#">link1</a>
          </li>
          <li className="menubar_menu-item">
            <a href="/#">link2</a>
          </li>
          <li className="menubar_menu-item">
            <a href="/#">link3</a>
          </li>
          <li className="menubar_menu-item">
            <a href="/#">link4</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
