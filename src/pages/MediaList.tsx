import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Stack, Grid, Button } from "@mui/material";
import tmdbApi from "../api/tmdbApi";
import { apiConfig } from "../api/apiConfig";
import MovieCard from "../components/movieCard/MovieCard";
import MovieGrid from "../components/movieGrid/MovieGrid";

const MediaList = () => {
  const { category } = useParams();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#111111",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: "20rem",
          padding: "1rem 0",
        }}
      >
        <Typography
          sx={{ textTransform: "capitalize" }}
          variant="h2"
          component="h2"
        >
          {category}
        </Typography>
      </Box>
      <MovieGrid category={category as "movie" | "tv"} />
    </>
  );
};

export default MediaList;
