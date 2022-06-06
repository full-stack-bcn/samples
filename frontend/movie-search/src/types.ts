export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster: string | null;
  backdrop: string | null;
  vote_average: number;
  tagline: string;
  genres?: Genre[];
}

export type MovieList = Movie[] | null;
