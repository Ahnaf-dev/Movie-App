import React from "react";
import { Typography } from "@mui/material";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <Typography variant="body1" component="p">
        API From
      </Typography>
      <a href="https://www.themoviedb.org/">
        <img src="/TMDBApi.png" alt="" />
      </a>
    </footer>
  );
};

export default Footer;
