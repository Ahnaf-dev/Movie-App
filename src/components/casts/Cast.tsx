import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Stack, Grid, Button } from "@mui/material";
import tmdbApi from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";
// import {apiConfig} from "../../"

function Cast({ category, item }: { category: "movie" | "tv"; item: any }) {
  const [cast, setCast] = useState<any>(null);

  useEffect(() => {
    const getCast = async () => {
      const response: any = await tmdbApi.getCast(category, item.id, {});
      setCast(response.cast.slice(0, 5));
    };
    getCast();
  }, []);

  if (!cast) {
    return null;
  }

  return (
    <Box sx={{ mt: 10, mb: 10 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
        Cast
      </Typography>
      <Grid container spacing={4}>
        {cast.map((item: any, i: number) => (
          <Grid key={i} item lg={2} md={4} sm={6} xs={12}>
            <Box sx={{ mb: 2, "& img": { width: "100%" } }}>
              <img src={apiConfig.getSmallImage(item.profile_path)} />
            </Box>
            <Typography variant="h3" component="p">
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Cast;
