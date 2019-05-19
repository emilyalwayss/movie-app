import React, { useEffect, useState } from 'react';

import MovieInfo from './components/MovieInfo';
import Paginator from './components/Paginator';
import SearchBar from './components/SearchBar';

import classes from './App.module.scss';

const APIKEY = '403ffcb3b4481da342203f94fb6e937e';

const parseQueryString = querystring => {
  const query = querystring.substring(1);
  const vars = query.split('&');
  return vars.reduce((queryObj, param) => {
    const [ key, value ] = param.split('=');
    queryObj[key] = decodeURIComponent(value);
    return queryObj;
  }, {});
}

const App = props => {
  const { p, s } = parseQueryString(window.location.search);

  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(p) || 1);
  const [search, setSearch] = useState(s || '');
  const [totalPages, setTotalPages] = useState(0);

  const updateSearch = s => {
    setSearch(s);
    setCurrentPage(1);
  }

  useEffect(() => {
    if (search.length) {
      setError(false);
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${search}&page=${currentPage}`)
        .then(response => response.json())
        .then(({ page, results, total_pages }) => {
          setMovies(results);
          setTotalPages(total_pages);
        })
        .catch(() => setError(true));
    }
  }, [currentPage, search]);

  return error ?
    'There was an error loading your movies' : (
      <div className={classes.app}>
        <h1 className={classes.header}>Movie Search App</h1>
        <SearchBar onChange={updateSearch} value={search} />
        {
          movies && movies.length > 0 && totalPages > 1 && (
            <Paginator
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )
        }
        <div className={classes.movies}>
        {
           movies && movies.length > 0 && movies.map(movie => (
            <MovieInfo
              key={movie.id}
              overview={movie.overview}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
              title={movie.title}
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
            />
          ))
        }
        </div>
      </div>
  );
};

export default App;
