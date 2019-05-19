import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

import classes from './MovieInfo.module.scss';

const MovieInfo = ({ overview, poster, releaseDate, title, voteAverage, voteCount }) => {
  return (
    <div className={classes.movieInfo}>
      <img
        alt={title}
        className={classes.poster}
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
      />
    <div>
      <div className={classes.title}>{title}</div>
      <div className={classes.releaseDate}>{releaseDate}</div>
      <div>{overview}</div>
      <Rating averageVote={voteAverage} totalVote={voteCount} />
    </div>
    </div>
  );
};

MovieInfo.propTypes = {
  overview: PropTypes.string,
  poster: PropTypes.string,
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
}

export default MovieInfo;
