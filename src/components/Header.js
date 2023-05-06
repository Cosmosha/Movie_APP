import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/header.css';

const Header = () => (
  <div className="nav-container">
    <nav>
      <NavLink to="/" className="logo">
        GO
        <span>MOVIES</span>
      </NavLink>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  </div>
);

export default Header;
