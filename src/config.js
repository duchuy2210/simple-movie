export const fetcher = (...args) => fetch(...args).then(res => res.json());
export const apiKey = '40da76dcc96f3bc0d962c6b579c8c842';
const tmdbEndPoint = 'https://api.themoviedb.org/3/movie';
export const tmdbAPI = {
  getMovieList: type =>
    `${tmdbEndPoint}/${type}?api_key=${apiKey}&language=en-US&page=1`,
  getMovieDetail: movieId =>
    `${tmdbEndPoint}/${movieId}?api_key=${apiKey}&language=en-US&page=1`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}&language=en-US&page=1`,
};
