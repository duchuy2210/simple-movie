import React from 'react';
import { fetcher, tmdbAPI } from '../../config';
import useSWR from 'swr';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const Banner = () => {
  // const [movies, setMovies] = useState([]);
  const { data } = useSWR(tmdbAPI.getMovieList('upcoming'), fetcher);
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
  const navigate = useNavigate();
  const { title, backdrop_path, id } = item;
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
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
}

export default Banner;
