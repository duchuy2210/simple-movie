import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import 'swiper/scss';
import HomePage from './pages/HomePage';
import TvSeriesPage from './pages/TvSeriesPage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from 'pages/auth/SignUpPage';
import Main from 'Layouts/Main';
import AuthLayout from 'Layouts/AuthLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/tv" element={<TvSeriesPage></TvSeriesPage>}></Route>
          <Route path="/movie" element={<MoviesPage></MoviesPage>}></Route>
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="sign-up" element={<SignUpPage></SignUpPage>}></Route>
        </Route>
        <Route
          path="/movie/:movieId"
          element={<MovieDetailsPage></MovieDetailsPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
