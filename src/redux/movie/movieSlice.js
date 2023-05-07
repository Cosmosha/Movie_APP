import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  nowPlayingMovies: [],
  currentMovies: [],
  bestMovies: [],
  movieDetails: {},
};

const key = '628073fbc5d1245bb49c98597f2aa5a6';
const url = 'https://api.themoviedb.org/3';
const currentYear = new Date().getFullYear();

export const fetchPopularMovies = createAsyncThunk('fetchMovies/popularMovies', async () => {
  try {
    const response = await fetch(`${url}/movie/popular?api_key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const fetchTopRatedMovies = createAsyncThunk('fetchMovies/topRatedMovies', async () => {
  try {
    const response = await fetch(`${url}/movie/top_rated?api_key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const fetchUpcomingMovies = createAsyncThunk('fetchMovies/upcomingMovies', async () => {
  try {
    const response = await fetch(`${url}/movie/upcoming?api_key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const fetchNowPlayingMovies = createAsyncThunk('fetchMovies/nowPlayingMovies', async () => {
  try {
    const response = await fetch(`${url}/movie/now_playing?api_key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const fetchCurrentMovies = createAsyncThunk('fetchMovies/currentMovies', async () => {
  try {
    const response = await fetch(`${url}/discover/movie?primary_release_year=${currentYear}&api_key=${key}&primary_release_year=${currentYear}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const fetchBestMovies = createAsyncThunk('fetchMovies/bestMovies', async () => {
  try {
    const response = await fetch(`${url}/discover/movie?primary_release_year=${currentYear}&sort_by=vote_average.desc&api_key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const fetchMovieDetails = createAsyncThunk('fetchMovies/movieDetails', async (id) => {
  try {
    const response = await fetch(`${url}/movie/${id}?api_key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = action.payload;
    });
    bulider.addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
      state.topRatedMovies = action.payload;
    });
    bulider.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      state.upcomingMovies = action.payload;
    });
    bulider.addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
      state.nowPlayingMovies = action.payload;
    });
    bulider.addCase(fetchCurrentMovies.fulfilled, (state, action) => {
      state.currentMovies = action.payload;
    });
    bulider.addCase(fetchBestMovies.fulfilled, (state, action) => {
      state.bestMovies = action.payload;
    });
    bulider.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
    });
  },
});

export default movieSlice.reducer;
