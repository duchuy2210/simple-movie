import React, { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { apiKey, fetcher } from '../config';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <Fragment>
      {data && (
        <div className="w-full h-[750px] relative">
          <div className="overlay inset-0 absolute bg-gradient-to-t from-black to-transparent"></div>
          <button
            onClick={() => navigate(`/movie`)}
            className="absolute top-5 left-5 z-30 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-10 h-10">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="w-full h-full mb-10 opacity-30">
            <img
              className="object-cover w-full h-full block"
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt="Ảnh"
            />
          </div>
          <div className="w-full h-full px-52 p-10 absolute top-0 flex gap-10 ">
            <div className="max-w-[350px] rounded-xl flex justify-center flex-col">
              <img
                className="rounded-xl object-cover mb-5 shadow-2xl"
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt="Ảnh"
              />
              <button className="w-full p-3 bg-primary rounded-xl text-white text-[20px] opacity-80 hover:opacity-100 hover:scale-y-[1.2] transition-all">
                Play
              </button>
            </div>
            <div className="text-white py-10 w-[1000px]">
              <h1 className=" text-5xl font-serif mb-14">{title}</h1>
              <div className="flex items-center gap-x-3 mb-5">
                {genres &&
                  genres.map(item => {
                    return (
                      <span
                        key={item.id}
                        className="px-4 py-2 border-2 border-white border-opacity-50 rounded-lg hover:cursor-pointer">
                        {item.name}
                      </span>
                    );
                  })}
              </div>
              <span className="leading-relaxed">{overview}</span>
            </div>
          </div>
          <MovieCredits></MovieCredits>
          <MovieTrailer></MovieTrailer>
          <SimilarMovie></SimilarMovie>
        </div>
      )}
    </Fragment>
  );
};
function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  return (
    <>
      <h2 className="text-3xl text-white text-center mb-10">Casts</h2>
      <div className="cast grid grid-cols-5 gap-5 px-20 text-white mb-40">
        {cast &&
          cast.slice(0, 5).map(item => {
            return (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center">
                <img
                  className="w-[200px] h-[200px] object-cover object-center rounded-full mb-5"
                  src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                  alt="Cast"
                />
                <h2 className=" text-xl font-medium">{item.original_name}</h2>
                <span className="opacity-70">{item.character}</span>
              </div>
            );
          })}
      </div>
    </>
  );
}
function MovieTrailer() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const trailers = data?.results || [];
  return (
    <>
      <h2 className="text-3xl text-white text-center mb-10">Videos</h2>
      <div className="trailer grid grid-cols-3 gap-x-10 px-10 text-white mb-40">
        {trailers.length > 0 &&
          trailers.slice(2, 5).map(item => {
            return (
              <div
                key={item.id}
                className="w-full aspect-video flex flex-col items-center">
                <span className="opacity-80 mb-5 text-lg">{item.name}</span>
                {
                  <iframe
                    className="w-full h-full object-fill"
                    width="1280"
                    height="720"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="Simple_Movie_Vid"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                }
              </div>
            );
          })}
      </div>
    </>
  );
}
function SimilarMovie() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&language=en-US&page=1`,
    fetcher
  );
  if (!data) return null;
  const similarMovies = data?.results || [];
  return (
    <>
      <h2 className="text-3xl text-white text-center mb-10">Similar Movies</h2>
      <div className="movie-list px-10 mb-40">
        <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
          {!!similarMovies?.length > 0 &&
            similarMovies.map(movie => {
              return (
                <SwiperSlide key={movie.id}>
                  <MovieCard item={movie}></MovieCard>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default MovieDetailsPage;
