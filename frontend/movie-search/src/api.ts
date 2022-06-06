import { API_KEY } from "./config";

export const tmdbFetch = async (path: string, query: object = {}) => {
  const params = new URLSearchParams(Object.entries({ ...query, api_key: API_KEY }));
  const url = new URL(`/3${path}?${params.toString()}`, "https://api.themoviedb.org");
  const response = await fetch(url.toString());
  return await response.json();
};

const imagePathToURL = (path: string, width: string = "w300") =>
  path ? `https://image.tmdb.org/t/p/${width}${path}` : null;

const fixImages = (width: string) => (movie: any) => ({
  ...movie,
  backdrop: imagePathToURL(movie.backdrop_path, width),
  poster: imagePathToURL(movie.poster_path, width),
});

export const getLatestMovies = async () => {
  const { results: movies } = await tmdbFetch("/movie/popular");
  return movies.map(fixImages("w300"));
};

export const searchMovies = async (search: string) => {
  const { results: movies } = await tmdbFetch("/search/movie", { query: search });
  return movies.map(fixImages("w300"));
};

export const getMovie = async (movieId: string | undefined) => {
  if (movieId) {
    const movie = await tmdbFetch(`/movie/${movieId}`);
    return fixImages("original")(movie);
  }
};
