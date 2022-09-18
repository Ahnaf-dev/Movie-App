import React, { useRef, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Container,
  List,
  ListItem,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const header = useRef<HTMLElement>(null);
  let trackScroll = 0;

  useEffect(() => {
    const toggleHeader = () => {
      if (trackScroll < document.documentElement.scrollTop) {
        header?.current?.classList.add("hide");
        header?.current?.classList.remove("active");
      } else {
        header?.current?.classList.remove("hide");
        header?.current?.classList.add("active");
      }
      trackScroll = document.documentElement.scrollTop;
    };
    window.addEventListener("scroll", toggleHeader);
    return () => window.removeEventListener("scroll", toggleHeader);
  }, []);

  return (
    <Box
      ref={header}
      className="header"
      sx={{
        padding: { xs: "1.5rem 0", md: "3rem 0", zIndex: "99" },
      }}
    >
      <Container maxWidth="xl">
        <Stack
          sx={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box className="logo">
            <img src="/popcorn.png" alt="" />
            <Typography variant="h2" component="h1">
              <Link to="/">AMovies</Link>
            </Typography>
          </Box>
          <ul className="menu">
            <li>
              <NavLink end to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink end to="/movie">
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink end to="/tv">
                TV Series
              </NavLink>
            </li>
          </ul>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
