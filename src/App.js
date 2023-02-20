import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import 'swiper/scss';
import HomePage from './pages/HomePage';
import Main from './components/Layouts/Main';
import TvSeriesPage from './pages/TvSeriesPage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/tv" element={<TvSeriesPage></TvSeriesPage>}></Route>
          <Route path="/movie" element={<MoviesPage></MoviesPage>}></Route>
        </Route>
          <Route path="/movie/:movieId" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
