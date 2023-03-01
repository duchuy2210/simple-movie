import React, { useEffect, useState } from 'react';
import { fetcher } from '../config';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { apiKey } from '../config';
import useDebounce from '../hooks/useDebounce';
import LoadingSkeleton from '../utils/LoadingSkeleton';
import MovieCardLoading from '../components/movie/MovieCardLoading';
const MoviesPage = () => {
  const [filter, setFilter] = useState('');
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
  );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}`
      );
    } else {
      setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
    }
  }, [filterDebounce]);
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1 rounded-lg">
          <input
            type="text"
            className="w-full bg-transparent outline-none p-4 text-white"
            placeholder="What film do you want to see?"
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          <MovieCardLoading></MovieCardLoading>
          <MovieCardLoading></MovieCardLoading>
          <MovieCardLoading></MovieCardLoading>
          <MovieCardLoading></MovieCardLoading>
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map(item => {
            return <MovieCard key={item.id} item={item}></MovieCard>;
          })}
      </div>
    </div>
  );
};

export default MoviesPage;
