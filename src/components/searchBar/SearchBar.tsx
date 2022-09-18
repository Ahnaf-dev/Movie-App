import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ category }: { category: "movie" | "tv" }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = e;
    setKeyword(value);
  }

  function handleClick() {
    navigate(`/${category}/search/${keyword}`);
    setKeyword("");
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {
      navigate(`/${category}/search/${keyword}`);
      setKeyword("");
    }
  }
  return (
    <Box
      sx={{
        position: "relative",
        isolation: "isolate",
        mb: 10,
        display: "flex",
        alignItems: "center",
      }}
    >
      <SearchIcon sx={{ position: "absolute", left: "3.5rem" }} />
      <Button
        color="secondary"
        variant="contained"
        onClick={() => handleClick()}
        sx={{
          color: "white",
          position: "absolute",
          height: "5.9rem",
          left: "28rem",
          borderTopRightRadius: "1.5rem",
          borderBottomRightRadius: "1.5rem",
        }}
      >
        Submit
      </Button>

      <TextField
        value={keyword}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        sx={{
          position: "absolute",
          pl: 4,
          zIndex: "-1",
          left: "0",
          color: "white",
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "transparent",
            },
          },
          "& input": {
            "&:focus": { outline: "none" },
            color: "white",
            borderRadius: "3rem",
            pl: 10,
            outline: "none",
            backgroundColor: "#111111",
          },
        }}
        variant="outlined"
        placeholder={`Search ${category}`}
        type="text"
      />
    </Box>
  );
}

export default SearchBar;
