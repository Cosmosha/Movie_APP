import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrentMovies } from '../redux/movie/movieSlice';

const CurrentMovies = () => {
  const dispatch = useDispatch();
  const currentMovies = useSelector((state) => state.movies.currentMovies.results);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchCurrentMovies());
  }, [dispatch]);

  return (
    <>
      <h1>Current Movies</h1>
      <div className="movie-card-container">
        {currentMovies.map((movie) => (
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

export default CurrentMovies;
