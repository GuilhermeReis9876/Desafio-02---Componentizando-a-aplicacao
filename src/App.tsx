import { useEffect, useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

import { GenreProps } from "./@types/Genre";
import { api } from "./services/api";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreProps[]>([]);

  useEffect(() => {
    api.get<GenreProps[]>("genres").then((response: any) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        genres={genres}
      />
      <Content
        selectedGenre={genres[selectedGenreId - 1] || ({} as GenreProps)}
        selectedGenreId={selectedGenreId}
      />
    </div>
  );
}
