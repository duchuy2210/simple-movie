import React from 'react';
import LoadingSkeleton from '../../utils/LoadingSkeleton';

const MovieCardLoading = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 h-full select-none text-white">
      <div className="w-full h-[250px] object-cover rounded-lg mb-5 object-top">
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="8px"></LoadingSkeleton>
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-medium mb-2">
          <LoadingSkeleton
            width="100%"
            height="28px"
            radius="10px"></LoadingSkeleton>
        </h3>
        <div className="flex item-center justify-between text-sm opacity-70 mb-10">
          <span>
            <LoadingSkeleton
              width="70px"
              height="20px"
              radius="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton
              width="50px"
              height="20px"
              radius="10px"></LoadingSkeleton>
          </span>
        </div>
        <button className="w-full mt-auto px-6 py-3 bg-primary rounded-lg font-medium">
          Watch
        </button>
      </div>
    </div>
  );
};

export default MovieCardLoading;
