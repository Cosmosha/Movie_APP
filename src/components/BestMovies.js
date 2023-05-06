import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBestMovies } from '../redux/movie/movieSlice';
import '../style/movies.css';

const BestMovies = () => {
  const dispatch = useDispatch();
  const bestMovies = useSelector((state) => state.movies.bestMovies.results);
  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchBestMovies());
  }, [dispatch]);

  return (
    <>
      <h1>Best Latest Movies</h1>
      <div className="movie-card-container">
        {bestMovies.map((movie) => (
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

export default BestMovies;
