import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUpcomingMovies } from '../redux/movie/movieSlice';
import PreviousNav from './PreviousNav';

const Upcoming = ({ search }) => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies.results);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  const filteredMovies = upcomingMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PreviousNav />
      <h1>Upcoming Movies</h1>
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
    </>
  );
};

Upcoming.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Upcoming;
