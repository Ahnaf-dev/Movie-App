import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";
import tmdbApi from "../../api/tmdbApi";
import { useNavigate } from "react-router-dom";
import { apiConfig } from "../../api/apiConfig";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Genre from "../genre/Genre";
const BannerSlide = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    const getMovies = async () => {
      const response: any = await tmdbApi.getMovies("popular", {});
      setMovies(response.results.slice(0, 7));
    };

    getMovies();
  }, []);

  // console.log(movies);
  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {movies.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.9) 100%), url(${apiConfig.getLargeImage(
                  item.backdrop_path
                )})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: { xs: "50rem", md: "60rem", lg: "70rem" },
                padding: { xs: "10rem 0", md: "23rem 0" },
              }}
            >
              <Container maxWidth="xl">
                <Box sx={{ width: { xs: "100%", md: "70%", lg: "50%" } }}>
                  <Typography sx={{ mb: 4 }} variant="h1" component="h2">
                    {item.title}
                  </Typography>
                  <Stack direction="row" sx={{ mb: 4 }}>
                    <Stack direction="row" sx={{ alignItems: "center", mr: 3 }}>
                      <StarIcon />
                      <Typography variant="body1" component="p" sx={{ ml: 1 }}>
                        {item.vote_average}
                      </Typography>
                    </Stack>
                    <Genre category="movie" genre={item.genre_ids} />
                  </Stack>
                  <Typography
                    sx={{ mb: 4, opacity: 0.7 }}
                    variant="body1"
                    component="p"
                  >
                    {item.overview}
                  </Typography>
                  <Stack direction="row" spacing={3}>
                    <Button
                      onClick={() => handleClick(item.id)}
                      size="large"
                      sx={{ color: "white" }}
                      variant="contained"
                      color="secondary"
                    >
                      Watch Now
                    </Button>
                    <Button
                      sx={{ color: "white" }}
                      size="large"
                      variant="outlined"
                      color="secondary"
                    >
                      Watch Trailer
                    </Button>
                  </Stack>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlide;
