import { useEffect, useState } from "react";
import { getLatestMovies } from "../api";
import MovieDetailsScreen from "./MovieDetailsScreen";
import "./SearchScreen.css";

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster: string | null;
  backdrop: string | null;
  vote_average: number;
}

interface MovieProps {
  movie: Movie;
}
function Movie({ movie }: MovieProps) {
  return (
    <div key={movie.id} className="movie">
      <img src={movie.backdrop || ""} className="poster" />
      <div className="info">
        <div className="title">{movie.title}</div>
        <div className="sub">
          <div className="date">{movie.release_date.split("-")[0]}</div>
          <div className="votes">&#9733; {movie.vote_average}</div>
        </div>
        <div className="overview">{movie.overview}</div>
      </div>
    </div>
  );
}

export default function SearchScreen() {
  const [movieList, setMovieList] = useState<Movie[] | null>(null);

  const loadMovies = async () => {
    const movies = await getLatestMovies();
    console.log(movies);
    setMovieList(movies);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  if (movieList === null) {
    return (
      <div className="centered">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
