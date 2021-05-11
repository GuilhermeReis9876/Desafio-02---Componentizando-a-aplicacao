import { GenreProps } from "../@types/Genre";
import { Button } from "./Button";

interface ISideBarProps {
  selectedGenreId: any;
  setSelectedGenreId: any;
  genres: GenreProps[];
}

export function SideBar({
  selectedGenreId,
  setSelectedGenreId,
  genres,
}: ISideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
