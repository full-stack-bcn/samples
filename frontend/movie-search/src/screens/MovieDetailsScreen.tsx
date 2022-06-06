import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../api";
import Loading from "../components/Loading";
import movie_icon from "../components/movie_icon.svg";
import { Movie } from "../types";
import { getYear } from "../utils";
import "./MovieDetailsScreen.css";

interface BackdropProps {
  image: string | null;
}
const Backdrop = ({ image }: BackdropProps) => {
  if (image) {
    return <img src={image} className="big-backdrop" />;
  } else {
    return (
      <div className="big-backdrop missing">
        <img src={movie_icon} />
      </div>
    );
  }
};

export default function MovieDetailsScreen() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  const loadMovie = async () => {
    const movie = await getMovie(movieId);
    setMovie(movie);
  };

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  if (movie === null) {
    return <Loading />;
  }
  return (
    <div className="movie-details-screen">
      <Backdrop image={movie.backdrop} />
      <div className="gradient" />
      <div className="wrapper">
        <div className="header">
          <img className="poster" src={movie.poster ?? ""} />
          <div className="text">
            <div className="title">{movie.title}</div>
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
      </div>
    </div>
  );
}
