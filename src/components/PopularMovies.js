import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../redux/movie/movieSlice';

const PopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies.results);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <>
      <h1>Most Popular Movies</h1>
      <div className="movie-card-container">
        {popularMovies.map((movie) => (
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

export default PopularMovies;
