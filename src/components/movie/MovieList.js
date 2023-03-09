import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';

const MovieList = ({ type }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
        {!!movies?.length > 0 &&
          movies.map(movie => {
            return (
              <SwiperSlide key={movie.id}>
                <MovieCard item={movie}></MovieCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MovieList;
