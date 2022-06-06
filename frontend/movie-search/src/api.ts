import { API_KEY } from "./config";

export const tmdbFetch = (path: string, query: object = {}) => {
  const params = new URLSearchParams(Object.entries({ ...query, api_key: API_KEY }));
  const url = new URL(`/3${path}?${params.toString()}`, "https://api.themoviedb.org");
  return fetch(url.toString());
};

const imagePathToURL = (path: string) => (path ? `https://image.tmdb.org/t/p/w300${path}` : null);

export const getLatestMovies = async () => {
  const response = await tmdbFetch("/movie/popular");
  const json = await response.json();
  return json.results.map((movie: any) => ({
    ...movie,
    backdrop: imagePathToURL(movie.backdrop_path),
    poster: imagePathToURL(movie.poster_path),
  }));
};
