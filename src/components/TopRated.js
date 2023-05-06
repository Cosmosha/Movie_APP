import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTopRatedMovies } from '../redux/movie/movieSlice';

const TopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies.results);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  return (
    <>
      <h1>Top Rated Movies</h1>
      <div className="movie-card-container">
        {topRatedMovies.map((movie) => (
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

export default TopRated;
