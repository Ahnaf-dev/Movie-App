import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Stack, Grid, Button } from "@mui/material";
import tmdbApi from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
import MovieCard from "../movieCard/MovieCard";
import SearchBar from "../searchBar/SearchBar";
function MovieGrid({ category }: { category: "movie" | "tv" }) {
  const [media, setMedia] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const { keyword } = useParams();
  useEffect(() => {
    let response: any;
    const getMedia = async () => {
      if (keyword) {
        response = await tmdbApi.search(category, { query: keyword });
      } else {
        if (category === "movie") {
          response = await tmdbApi.getMovies("upcoming", { page: page });
        }
        if (category === "tv") {
          response = await tmdbApi.getTV("top_rated", { page: page });
        }
      }

      setMedia(response.results);
      setTotal(response.total_pages);
    };
    getMedia();
  }, [category, keyword]);

  function handleClick() {
    let response: any;
    const getMedia = async () => {
      if (keyword) {
        response = await tmdbApi.search(category, {
          query: keyword,
          page: page + 1,
        });
      } else {
        if (category === "movie") {
          response = await tmdbApi.getMovies("upcoming", { page: page + 1 });
        }
        if (category === "tv") {
          response = await tmdbApi.getTV("top_rated", { page: page + 1 });
        }
      }

      setPage(page + 1);
      setMedia([...media, ...response.results]);
      setTotal(response.total_pages);
    };
    getMedia();
  }

  return (
    <Box sx={{ padding: "10rem 0" }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <SearchBar category={category} />
        </Box>
        <Grid container spacing={4}>
          {media &&
            media.map((item: any, i: number) => (
              <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
                <MovieCard item={item} category={category as "movie" | "tv"} />
              </Grid>
            ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {page < total && (
            <Button
              sx={{ color: "white", "& a": { fontSize: "1.6rem" } }}
              size="large"
              variant="outlined"
              color="secondary"
              onClick={() => handleClick()}
            >
              Load More
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default MovieGrid;
