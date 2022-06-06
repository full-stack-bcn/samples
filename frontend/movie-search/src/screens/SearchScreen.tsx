import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLatestMovies, searchMovies } from "../api";
import { MovieList } from "../types";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import NoResults from "../components/NoResults";

import "./SearchScreen.css";

interface ResultsProps {
  movieList: MovieList;
}
const Results = ({ movieList }: ResultsProps) => {
  const navigate = useNavigate();

  if (movieList === null) {
    return <Loading />;
  }
  if (movieList.length === 0) {
    return <NoResults />;
  }
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => navigate(`/movie/${movie.id}`)} />
      ))}
    </div>
  );
};

export default function SearchScreen() {
  const [search, setSearch] = useState<string>("");
  const [movieList, setMovieList] = useState<MovieList>(null);

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
    setMovieList(null);
    loadMovies();
  };

  useEffect(() => {
    loadMovies();
  }, []);

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
      <Results movieList={movieList} />
    </div>
  );
}
