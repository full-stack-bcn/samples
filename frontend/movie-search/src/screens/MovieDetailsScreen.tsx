import { useParams } from "react-router-dom";

export default function MovieDetailsScreen() {
  const { movieId } = useParams();
  return <div>MovieDetailsScreen {movieId}</div>;
}
