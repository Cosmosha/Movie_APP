import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBestMovies } from '../redux/movie/movieSlice';
import '../style/movies.css';
import PreviousNav from './PreviousNav';

const BestMovies = ({ search }) => {
  const dispatch = useDispatch();
  const bestMovies = useSelector((state) => state.movies.bestMovies.results);
  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchBestMovies());
  }, [dispatch]);

  const filteredMovies = bestMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PreviousNav />
      <h1>Best Latest Movies</h1>
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

BestMovies.propTypes = {
  search: PropTypes.string.isRequired,
};

export default BestMovies;
