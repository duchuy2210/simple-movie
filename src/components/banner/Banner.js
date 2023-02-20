import React, { useEffect, useState } from 'react';
import { fetcher } from '../../config';
import useSWR from 'swr';
import { SwiperSlide, Swiper } from 'swiper/react';

const Banner = () => {
  // const [movies, setMovies] = useState([]);
  const { data} = useSWR(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=40da76dcc96f3bc0d962c6b579c8c842&language=en-US&page=1',
    fetcher
  );
  const movies = data?.results || [];
  // useEffect(() => {
  //   data && setMovies(data.results);
  // }, [data]);
  return (
    <section className="banner h-[500px] page-container mb-16">
      <Swiper grabCursor={true} slidesPerView={'auto'}>
        {!!movies?.length > 0 &&
          movies.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <BannerItems item={item}></BannerItems>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};
function BannerItems({ item }) {
  const { title, backdrop_path } = item;
  return (
    <div className="h-full w-full bg-white rounded-lg mx-auto relative">
      <div className="overlay inset-0 absolute bg-gradient-to-t from-black rounded-lg to-transparent"></div>
      <img
        className="object-cover object-top w-full h-full rounded-lg"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt="banner"
      />
      <div className="content absolute text-white left-5 bottom-5">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border-2 border-white border-opacity-50 rounded-lg">
            action
          </span>
          <span className="px-4 py-2 border-2 border-white border-opacity-50  rounded-lg">
            action
          </span>
          <span className="px-4 py-2 border-2 border-white border-opacity-50  rounded-lg">
            action
          </span>
        </div>
        <button className="px-6 py-3 bg-primary rounded-lg font-medium text-white">
          Watch
        </button>
      </div>
    </div>
  );
}

export default Banner;
