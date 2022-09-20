import React, { useEffect } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { apiConfig } from "../../api/apiConfig";
import StarIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./overlay.scss";

function MovieCard({
  item,
  category,
}: {
  item: any;
  category: "tv" | "movie";
}) {
  const url = `/${category}/${item.id}`;
  const navigate = useNavigate();

  // const ratings =
  //   category === "movie"
  //     ? item.release_date.split("-")[0]
  //     : item.first_air_date.split("-")[0];
  return (
    <Box onClick={() => navigate(url)}>
      <Box
        className="movie-card"
        sx={{
          "& img": {
            width: "100%",
            height: { xs: "30rem", md: "40rem", xl: "50rem" },
          },
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", height: "100%" }}>
          <img
            src={apiConfig.getSmallImage(
              item.poster_path || item.backdrop_path
            )}
            alt={item.title}
          />
          <div className="movie-card__overlay">
            <PlayArrowIcon />
          </div>
        </Box>
        <Typography sx={{ mt: 2 }} variant="h3" component="h3">
          {item.title || item.name}
        </Typography>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between", mt: 2 }}
        >
          {/* <Typography sx={{ opacity: 0.7 }} variant="body1" component="p">
            {date}
          </Typography> */}
          <Stack direction="row" sx={{ alignItems: "center", mr: 3 }}>
            <StarIcon />
            <Typography variant="body1" component="p" sx={{ ml: 1 }}>
              {item.vote_average}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default MovieCard;
