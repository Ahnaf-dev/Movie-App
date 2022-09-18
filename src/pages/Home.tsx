import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import BannerSlide from "../components/banner_slide/BannerSlide";
import axiosInstance from "../api/apiConfig";
import tmdbApi from "../api/tmdbApi";
import DisplayMediaRow from "../components/DisplayRow/DisplayMediaRow";

const Home = () => {
  return (
    <>
      <BannerSlide />
      <Box sx={{ mt: 20, mb: 20 }}>
        <Container maxWidth="xl">
          <DisplayMediaRow
            category={"movie"}
            type={"popular"}
            title={"Popular Movies"}
          />
        </Container>
      </Box>
      <Box sx={{ mt: 20, mb: 20 }}>
        <Container maxWidth="xl">
          <DisplayMediaRow
            category={"movie"}
            type={"top_rated"}
            title={"Top Rated Movies"}
          />
        </Container>
      </Box>

      <Box sx={{ mt: 20, mb: 20 }}>
        <Container maxWidth="xl">
          <DisplayMediaRow
            category={"tv"}
            type={"popular"}
            title={"Popular TV"}
          />
        </Container>
      </Box>
      <Box sx={{ mt: 20, mb: 20 }}>
        <Container maxWidth="xl">
          <DisplayMediaRow
            category={"tv"}
            type={"top_rated"}
            title={"Top Rated TV"}
          />
        </Container>
      </Box>
    </>
  );
};

export default Home;
