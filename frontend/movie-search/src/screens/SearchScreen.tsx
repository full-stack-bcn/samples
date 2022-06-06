import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLatestMovies, searchMovies } from "../api";
import { getYear } from "../utils";
import movie_icon from "./movie_icon.svg";
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

interface BackdropProps {
  image: string | null;
}
const Backdrop = ({ image }: BackdropProps) => {
  if (image) {
    return <img src={image} className="backdrop" />;
  } else {
    return (
      <div className="backdrop missing">
        <img src={movie_icon} />
      </div>
    );
  }
}

interface MovieProps {
  movie: Movie;
  onClick: () => void;
}
function Movie({ movie, onClick }: MovieProps) {
  return (
    <div key={movie.id} onClick={onClick} className="movie">
      <Backdrop image={movie.backdrop} />
      <div className="info">
        <div className="title">{movie.title}</div>
        <div className="sub">
          <div className="date">{getYear(movie.release_date)}</div>
          <div className="votes">&#9733; {movie.vote_average}</div>
        </div>
        <div className="overview">{movie.overview}</div>
      </div>
    </div>
  );
}

const NoResults = () => <p className="centered no-results">No results</p>;

export default function SearchScreen() {
  const [search, setSearch] = useState<string>("");
  const [movieList, setMovieList] = useState<Movie[] | null>(null);
  const navigate = useNavigate();

  const loadMovies = async () => {
    let movies = [];
    if (search === "") {
      movies = await getLatestMovies();
    } else {
      movies = await searchMovies(search);
    }
    setMovieList(movies);
  };

  const doSearch = (e: FormEvent) => {
    e.preventDefault();
    loadMovies();
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
    <div className="search-screen">
      <form onSubmit={doSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies"
        />
        <div className="button">Search</div>
      </form>
      <div className="movie-list">
        {movieList.map((movie) => (
          <Movie key={movie.id} movie={movie} onClick={() => navigate(`/movie/${movie.id}`)} />
        ))}
      </div>
      {movieList.length === 0 && <NoResults />}
    </div>
  );
}
