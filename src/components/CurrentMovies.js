import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrentMovies } from '../redux/movie/movieSlice';
import PreviousNav from './PreviousNav';

const CurrentMovies = ({ search }) => {
  const dispatch = useDispatch();
  const currentMovies = useSelector((state) => state.movies.currentMovies.results);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchCurrentMovies());
  }, [dispatch]);

  const filteredMovies = currentMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PreviousNav />
      <h1>Current Movies</h1>
      <div className="movie-card-container">
        {filteredMovies.length > 0 ? (
          <div className="movie-card-container">
            {filteredMovies.map((movie) => (
              <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
                {movie.release_date}
                <img src={img_path + movie.poster_path} alt={movie.title} />
                <div className="card-footer">
                  <p className="movie-title">{movie.title}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <h2 className="noData">No Data Found</h2>
        )}
      </div>
    </>
  );
};

CurrentMovies.propTypes = {
  search: PropTypes.string.isRequired,
};

export default CurrentMovies;
