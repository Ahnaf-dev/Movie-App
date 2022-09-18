import React from "react";
import "./App.scss";
import { Typography, Container } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { movieTheme } from "./theme/theme";
import Home from "./pages/Home";
import MediaList from "./pages/MediaList";
import Detail from "./pages/Detail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const theme = createTheme(movieTheme);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<MediaList />} />
          <Route path="/:category/search/:keyword" element={<MediaList />} />
          <Route path="/:category/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
