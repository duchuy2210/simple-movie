import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher } from '../../config';

const MovieList = ({type}) => {
  const {data} = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=40da76dcc96f3bc0d962c6b579c8c842&language=en-US&page=1`,
    fetcher
    );
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
