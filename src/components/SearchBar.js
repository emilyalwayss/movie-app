import React from 'react';
import PropTypes from 'prop-types';

import classes from './SearchBar.module.scss';

const update = onChange => e => onChange(e.target.value);

const SearchBar = ({onChange, value}) => (
  <input className={classes.search} onChange={update(onChange)} value={value} />
);

SearchBar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default SearchBar;
