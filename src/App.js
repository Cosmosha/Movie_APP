import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import BestMovies from './components/BestMovies';
import CurrentMovies from './components/CurrentMovies';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import MovieDetails from './components/MovieDetails';
import PopularMovies from './components/PopularMovies';
import NowPlaying from './components/NowPlaying';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <header className="App">
        <Header setSearch={setSearch} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/best-movies" element={<BestMovies search={search} />} />
        <Route path="/current-movies" element={<CurrentMovies search={search} />} />
        <Route path="/top-rated-movies" element={<TopRated search={search} />} />
        <Route path="/now-playing-movies" element={<NowPlaying search={search} />} />
        <Route path="/upcoming-movies" element={<Upcoming search={search} />} />
        <Route path="/most-popular-movies" element={<PopularMovies search={search} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
