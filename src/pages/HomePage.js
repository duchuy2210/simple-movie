import React, { Fragment } from 'react';
import Banner from '../components/banner/Banner';
import MovieList from '../components/movie/MovieList';

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="movie-layout page-container mb-10">
        <h2 className="capitalize text-white text-2xl font-bold mb-10">
          Now playing
        </h2>
        <MovieList type={'now_playing'}></MovieList>
      </section>
      <section className="movie-layout page-container mb-10">
        <h2 className="capitalize text-white text-2xl font-bold mb-10">
          Upcoming
        </h2>
        <MovieList type={'upcoming'}></MovieList>
      </section>
      <section className="movie-layout page-container mb-10">
        <h2 className="capitalize text-white text-2xl font-bold mb-10">
          Popular
        </h2>
        <MovieList type={'popular'}></MovieList>
      </section>
      <section className="movie-layout page-container mb-10">
        <h2 className="capitalize text-white text-2xl font-bold mb-10">
          Top rated
        </h2>
        <MovieList type={'top_rated'}></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
