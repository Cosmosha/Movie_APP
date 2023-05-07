import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/header.css';

const Header = ({ setSearch }) => {
  const [search, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/" className="logo">
          GO
          <span>MOVIES</span>
        </NavLink>
        <div className="search">
          <form>
            <input type="text" placeholder="Search" value={search} onChange={handleInputChange} />
          </form>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Header;
