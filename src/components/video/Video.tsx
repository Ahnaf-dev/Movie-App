import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Stack, Grid, Button } from "@mui/material";
import tmdbApi from "../../api/tmdbApi";
import { apiConfig } from "../../api/apiConfig";

function Video({ category, item }: { category: "movie" | "tv"; item: any }) {
  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    const getVideo = async () => {
      const response: any = await tmdbApi.getVideo(category, item.id, {});
      setVideo(response.results.slice(0, 1));
    };
    getVideo();
  }, []);

  if (!video) {
    return null;
  }

  return (
    <Box
      sx={{
        mt: 10,
        mb: 10,
        pt: 4,
        pb: 4,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ mb: 5 }} variant="h2" component="h2">
        Video
      </Typography>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${video[0].key}`}
      ></iframe>
    </Box>
  );
}

export default Video;
