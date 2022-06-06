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

export interface Credit {
  name: string;
  character: string;
  profile: string;
}

export type CreditList = Credit[] | null;
export type MovieList = Movie[] | null;
