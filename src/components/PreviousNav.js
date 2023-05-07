import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import '../style/previousnav.css';

const PreviousNav = () => {
  const previous = useNavigate();

  const handlePrevious = () => {
    previous(-1);
  };

  return (
    <div className="prevNav">
      <Link to="/" className="back-link">
        <FaArrowAltCircleLeft onClick={handlePrevious} className="back-arrow" />
      </Link>
    </div>
  );
};

export default PreviousNav;
