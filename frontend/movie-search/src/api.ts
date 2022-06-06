import { API_KEY } from "./config";

export const tmdbFetch = async (path: string, query: object = {}) => {
  const params = new URLSearchParams(Object.entries({ ...query, api_key: API_KEY }));
  const url = new URL(`/3${path}?${params.toString()}`, "https://api.themoviedb.org");
  const response = await fetch(url.toString());
  return await response.json();
};

const imagePathToURL = (path: string, width: string = "w300") =>
  path ? `https://image.tmdb.org/t/p/${width}${path}` : null;

const genImgUrls = (width: string, fields: string[]) => (movie: any) => {
  let fixedMovie = { ...movie };
  for (let field of fields) {
    fixedMovie[field] = imagePathToURL(movie[field + "_path"], width);
  }
  return fixedMovie;
};

export const getLatestMovies = async () => {
  const { results: movies } = await tmdbFetch("/movie/popular");
  return movies.map(genImgUrls("w300", ["backdrop", "poster"]));
};

export const searchMovies = async (search: string) => {
  const { results: movies } = await tmdbFetch("/search/movie", { query: search });
  return movies.map(genImgUrls("w300", ["backdrop", "poster"]));
};

export const getMovie = async (movieId: string | undefined) => {
  if (movieId) {
    const movie = await tmdbFetch(`/movie/${movieId}`);
    return genImgUrls("original", ["backdrop", "poster"])(movie);
  }
};

export const getMovieCredits = async (movieId: string | undefined) => {
  if (movieId) {
    const { cast } = await tmdbFetch(`/movie/${movieId}/credits`);
    return cast.map(genImgUrls("w200", ["profile"]));
  }
};
