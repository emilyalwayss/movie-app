import React from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';

import RatingStar from './RatingStar'

import classes from './Rating.module.scss';

const Rating = ({ averageVote, totalVote }) => (
  <span className={classes.rating}>
  {
    times(10, i => <RatingStar key={i} filled={Math.floor(averageVote) > i} />)
  } ({totalVote} reviews)
  </span>
);

Rating.propTypes = {
  averageVote: PropTypes.number,
  totalVote: PropTypes.number,
}

export default Rating;
