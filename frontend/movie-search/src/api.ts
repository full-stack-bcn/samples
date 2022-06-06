import { API_KEY } from "./config";

export const tmdbFetch = async (path: string, query: object = {}) => {
  const params = new URLSearchParams(Object.entries({ ...query, api_key: API_KEY }));
  const url = new URL(`/3${path}?${params.toString()}`, "https://api.themoviedb.org");
  const response = await fetch(url.toString());
  const json = await response.json();
  return json.results;
};

const imagePathToURL = (path: string) => (path ? `https://image.tmdb.org/t/p/w300${path}` : null);

const fixImages = (movie: any) => ({
  ...movie,
  backdrop: imagePathToURL(movie.backdrop_path),
  poster: imagePathToURL(movie.poster_path),
});

export const getLatestMovies = async () => {
  const movies = await tmdbFetch("/movie/popular");
  return movies.map(fixImages);
};

export const searchMovies = async (search: string) => {
  const movies = await tmdbFetch("/search/movie", { query: search });
  return movies.map(fixImages);
};
