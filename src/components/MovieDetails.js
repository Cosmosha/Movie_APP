import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../redux/movie/movieSlice';
import '../style/movieDetails.css';
import PreviousNav from './PreviousNav';

const MovieDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.movieDetails);

  const img_path = 'https://image.tmdb.org/t/p/w185';

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <PreviousNav />
      <div className="movie-details">
        <h1>{movieDetails.title}</h1>
        <div className="movie-container">
          <img src={img_path + movieDetails.poster_path} alt={movieDetails.title} />
          <div className="movie-info">
            <p>{movieDetails.overview}</p>
            <h4>
              <strong>Relase Date: </strong>
              {movieDetails.release_date}
            </h4>
            <h5>
              <strong>Rating: </strong>
              {movieDetails.vote_average}
            </h5>

            <h5>
              <strong>Duration: </strong>
              {movieDetails.runtime}
              mins.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
