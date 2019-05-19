import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { range } from 'lodash';

import classes from './Paginator.module.scss';

const Paginator = ({ currentPage, setCurrentPage, totalPages }) => {
  const minDisplayedPage = Math.max(currentPage - 5, 1);
  const maxDisplayedPage = Math.min(Math.max(currentPage + 5, 10), totalPages);
  return (
    <div className={classes.paginator}>
      <button
        className={classNames(classes.left, {[classes.disabled]: currentPage === 1})}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >{'<'}
      </button>
      {
        range(minDisplayedPage, maxDisplayedPage).map(page => (
            <button
              className={classNames(classes.page, { [classes.current]: currentPage === page })}
              disabled={currentPage === page}
              key={page}
              onClick={() => setCurrentPage(page)}
            >{page}
            </button>
          )
        )
      }
      <button
        className={classNames({[classes.disabled]: currentPage === totalPages})}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >{'>'}
      </button>
    </div>
  )
};

Paginator.propsTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  totalPages: PropTypes.number,
}

export default Paginator;
