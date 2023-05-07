import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/main.css';
import {
  fetchBestMovies, fetchCurrentMovies, fetchTopRatedMovies,
  fetchNowPlayingMovies, fetchPopularMovies, fetchUpcomingMovies,
} from '../redux/movie/movieSlice';
import image1 from '../assets/movie.jpg';
import image2 from '../assets/movie2.jpg';
import image5 from '../assets/movie5.jpg';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestMovies());
    dispatch(fetchCurrentMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="card-container">
      <Link to="/best-movies" className="card bestmovie">
        <h4>Best Latest Movies</h4>
        <img src={image1} alt="best-latest-movies" />
      </Link>
      <Link to="/most-popular-movies" className="card ">
        <h4>Most Popular Movies</h4>
        <img src={image2} alt="most-popular-movies" />
      </Link>
      <Link to="/current-movies" className="card ">
        <h4>Current Movies</h4>
        <img src={image5} alt="current-movies" />
      </Link>
      <Link to="/top-rated-movies" className="card ">
        <h4>Top Rated Movies</h4>
        <img src={image2} alt="top-rated-movie" />
      </Link>
      <Link to="/now-playing-movies" className="card ">
        <h4>Now Playing Movies</h4>
        <img src={image5} alt="now-playing-movies" />
      </Link>
      <Link to="/upcoming-movies" className="card ">
        <h4>Upcoming Movies</h4>
        <img src={image1} alt="upcoming-movies" />
      </Link>

    </div>
  );
};

export default Main;
