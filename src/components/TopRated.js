import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTopRatedMovies } from '../redux/movie/movieSlice';
import PreviousNav from './PreviousNav';

const TopRated = ({ search }) => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies.results);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const filteredMovies = topRatedMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PreviousNav />
      <h1>Top Rated Movies</h1>
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

TopRated.propTypes = {
  search: PropTypes.string.isRequired,
};

export default TopRated;
