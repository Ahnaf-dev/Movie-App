import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import tmdbApi from "../../api/tmdbApi";

interface GenreInterface {
  category: "movie" | "tv";
  genre: number[];
}
const Genre = ({ category, genre }: GenreInterface) => {
  const [genres, setGenres] = useState<string[] | []>([]);
  useEffect(() => {
    const getGenre = async () => {
      const response: any = await tmdbApi.getGenres(`${category}`, {});
      const genreStrings = genre.map((item: number) => {
        return response.genres.find((genre: any) => item === genre.id).name;
      });
      setGenres(genreStrings);
    };

    getGenre();
  }, []);
  return (
    <Stack direction="row" spacing={3}>
      {genres &&
        genres.map((item: string, i: number) => (
          <Typography variant="body1" component="p" key={i}>
            {item}
          </Typography>
        ))}
    </Stack>
  );
};

export default Genre;
