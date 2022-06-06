import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie, getMovieCredits } from "../api";
import Loading from "../components/Loading";
import { CreditList, Movie } from "../types";
import { getYear } from "../utils";
import "./DetailsScreen.css";

export default function MovieDetailsScreen() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [credits, setCredits] = useState<CreditList>(null);

  const loadMovie = async () => {
    const movie = await getMovie(movieId);
    setMovie(movie);
    const credits = await getMovieCredits(movieId);
    setCredits(credits.slice(0, 7));
  };

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  if (movie === null) {
    return <Loading />;
  }
  return (
    <div className="movie-details-screen" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <div className="gradient" />
      <div className="wrapper">
        <div className="header">
          <img className="poster" src={movie.poster ?? ""} />
          <div className="text">
            <h1 className="title">{movie.title}</h1>
            <div className="tagline">{movie.tagline}</div>
            <div className="subtitle">
              <div className="year">{getYear(movie.release_date)}</div>
              <div className="space" />
              <div className="votes">&#9733; {movie.vote_average}</div>
              <div className="flex-space" />
              <div className="genres">
                {movie.genres?.map((g) => (
                  <span>{g.name}</span>
                ))}
              </div>
            </div>
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
        <div className="credits">
          <h2>Cast</h2>
          <div className="actor-list">
            {credits?.map((c) => (
              <div className="card">
                <img className="profile" src={c.profile} />
                <div className="name">{c.name}</div>
                <div className="role">{c.character}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
