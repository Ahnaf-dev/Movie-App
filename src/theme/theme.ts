export const movieTheme = {
  spacing: 5,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  palette: {
    secondary: {
      main: "#00ACC1",
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "clamp(5rem, 4vw, 6.4rem)",
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(2.4rem, 6vw, 4rem)",
    },
    h3: {
      fontWeight: 700,
      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
    },
    body1: {
      fontWeight: 500,
      fontSize: "clamp(1.6rem, 1.5vw, 1.8rem)",
    },
  },
};
