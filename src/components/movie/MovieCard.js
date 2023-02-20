import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 h-full select-none text-white">
      {item && (
        <img
          className="w-full h-[250px] object-cover rounded-lg mb-5 object-top"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="ava"
        />
      )}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-medium mb-2">{item && title}</h3>
        <div className="flex item-center justify-between text-sm opacity-70 mb-10">
          <span>{item && new Date(release_date).getFullYear()}</span>
          <span>{item && vote_average}</span>
        </div>
        <button onClick={()=>navigate(`/movie/${id}`)} className="w-full mt-auto px-6 py-3 bg-primary rounded-lg font-medium">
          Watch
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
