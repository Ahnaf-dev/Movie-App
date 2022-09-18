import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";
import axiosInstance from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import MovieCard from "../movieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "./row.scss";
interface options {
  category: "movie" | "tv";
  type: "popular" | "top_rated" | "upcoming" | "similar";
  title: string;
  id?: number;
}
function DisplayMediaRow({ category, type, title, id }: options) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let response: any;
      if (category === "movie") {
        if (type === "popular" || type === "top_rated" || type === "upcoming") {
          response = await tmdbApi.getMovies(type, {});
        }
      }
      if (category === "tv") {
        if (type === "popular" || type === "top_rated") {
          response = await tmdbApi.getTV(type, {});
        }
      }

      if (type === "similar") {
        response = await tmdbApi.getSimilar(category, id as number, {});
      }

      setMedia(response.results);
    };
    getItems();
  }, []);
  return (
    <Box className="row-slider">
      <Stack direction="row" spacing={3} sx={{ mb: 4, alignItems: "center" }}>
        <Typography variant="h3" component="h2">
          {title}
        </Typography>
        <Button
          sx={{ color: "white", "& a": { fontSize: "1.6rem" } }}
          size="large"
          variant="outlined"
          color="secondary"
        >
          <Link to={`/${category}`}>Watch More</Link>
        </Button>
      </Stack>
      <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={10}>
        {media &&
          media.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={category} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}

export default DisplayMediaRow;
