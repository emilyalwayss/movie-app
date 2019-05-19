import React from 'react';
import PropTypes from 'prop-types';

import classes from './RatingStar.module.scss';

// https://material.io/tools/icons/
const RatingStar = ({ filled }) => (
  <span className={classes.star} style={{ fill: filled ? 'gold' : 'gray'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  </span>
);

RatingStar.propTypes = {
  filled: PropTypes.bool
}

export default RatingStar;
