import { useEffect, useState } from "react";

import { api } from "../services/api";

import { MovieCard } from "./MovieCard";

import { GenreProps } from "../@types/Genre";
import { MovieProps } from "../@types/Movie";

interface IContentProps {
  selectedGenreId: number;
  selectedGenre: GenreProps;
}

export function Content({ selectedGenre, selectedGenreId }: IContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
