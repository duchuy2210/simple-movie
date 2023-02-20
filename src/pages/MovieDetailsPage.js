import React, { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { apiKey, fetcher } from '../config';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path,title} = data;
  console.log(data);
  return (
    <Fragment>
      {data && (
        <div className="w-full h-[750px] relative">
          <div className="overlay inset-0 absolute bg-gradient-to-t from-black to-transparent"></div>
          <button onClick={()=>navigate(`/movie`)} className="absolute top-5 left-5 z-30 text-white">
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
          <div className="w-full h-full opacity-30">
            <img
              className="object-cover w-full h-full block"
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt="Ảnh"
            />
          </div>
          <div className='w-full h-full px-40 p-10 absolute top-0 flex gap-10 '>
            <div className="w-[350px] rounded-xl flex justify-center flex-col">
              <img
                className="rounded-xl object-cover mb-5 shadow-2xl"
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt="Ảnh"
              />
              <button className="w-full p-3 bg-primary rounded-xl text-white text-[20px] opacity-80 hover:opacity-100 hover:scale-y-[1.2] transition-all">
                Play
              </button>
            </div>
            <div className='text-white py-10'>
              <h1 className=' text-5xl font-serif'>{title}</h1>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;
