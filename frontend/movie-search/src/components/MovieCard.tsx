import { Movie } from "../types";
import { getYear } from "../utils";
import "./MovieCard.css";
import movie_icon from "./movie_icon.svg";

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
};

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}
export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div className="movie-card" key={movie.id} onClick={onClick}>
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
