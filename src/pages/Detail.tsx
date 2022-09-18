import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Stack, Grid, Button } from "@mui/material";
import { apiConfig } from "../api/apiConfig";
import tmdbApi from "../api/tmdbApi";
import StarIcon from "@mui/icons-material/Star";
import Genre from "../components/genre/Genre";
import Cast from "../components/casts/Cast";
import Video from "../components/video/Video";
import DisplayMediaRow from "../components/DisplayRow/DisplayMediaRow";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState<any>(null);
  let numID: number = Number(id);
  useEffect(() => {
    const getItem = async () => {
      const response: any = await tmdbApi.detail(
        category as "movie" | "tv",
        numID,
        {}
      );
      setItem(response);
      window.scrollTo(0, 0);
    };
    getItem();
  }, [category, id]);
  if (!item) {
    return null;
  }
  return (
    <Box>
      <Box
        sx={{
          background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.9) 100%), url(${apiConfig.getLargeImage(
            item.backdrop_path
          )})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: { xs: "20rem", md: "30rem", lg: "30rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ textTransform: "capitalize" }} variant="h3">
          {category}
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ margin: "5rem 0" }}>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={5}>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                "& img": { width: "100%", maxHeight: "50rem" },
                position: "relative",
                flex: "1",
              }}
            >
              <img
                src={`${apiConfig.getSmallImage(
                  item.backdrop_path || item.poster_path
                )}`}
                alt=""
              />
            </Box>
            <Box sx={{ flex: "1" }}>
              <Typography sx={{ mb: 1 }} variant="h2" component="h3">
                {(item && item.title) || (item && item.name)}
              </Typography>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                spacing={5}
              >
                <Stack direction="row">
                  <Stack direction="row" sx={{ alignItems: "center", mr: 3 }}>
                    <StarIcon />
                    <Typography variant="body1" component="p" sx={{ ml: 1 }}>
                      {item && item.vote_average}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={3}>
                  {item &&
                    item.genres.map((item: any, i: number) => (
                      <Typography key={i} variant="body1" component="p">
                        {item.name}
                      </Typography>
                    ))}
                </Stack>
              </Stack>
              <Typography
                variant="body1"
                component="p"
                sx={{ opacity: 0.7, mt: 2 }}
              >
                {item.overview}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Cast category={category as "movie" | "tv"} item={item} />
        <Video category={category as "movie" | "tv"} item={item} />
        <Box sx={{ mb: 10, mt: 10 }}>
          <DisplayMediaRow
            category={category as "movie" | "tv"}
            type={"similar"}
            title={`Similar ${category}`}
            id={item.id}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Detail;
