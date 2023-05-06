import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNowPlayingMovies } from '../redux/movie/movieSlice';
import PreviousNav from './PreviousNav';

const NowPlaying = ({ search }) => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies.results);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  const filteredMovies = nowPlayingMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PreviousNav />
      <h1>Now Playing Movies</h1>
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

NowPlaying.propTypes = {
  search: PropTypes.string.isRequired,
};

export default NowPlaying;
