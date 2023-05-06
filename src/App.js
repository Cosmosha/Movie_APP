import { Route, Routes } from 'react-router-dom';
import './App.css';
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
  return (
    <div className="App">
      <header className="App">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/best-movies" element={<BestMovies />} />
        <Route path="/current-movies" element={<CurrentMovies />} />
        <Route path="/top-rated-movies" element={<TopRated />} />
        <Route path="/now-playing-movies" element={<NowPlaying />} />
        <Route path="/upcoming-movies" element={<Upcoming />} />
        <Route path="/most-popular-movies" element={<PopularMovies />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
