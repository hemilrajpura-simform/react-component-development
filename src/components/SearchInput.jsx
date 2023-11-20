import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput() {
  return (
    <div>
      <TextField
        className="SearchInputField"
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: <SearchIcon style={{ color: "gray" }} />,
          sx: {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              background: "rgba(255, 255, 255, 0.10)",
              borderRadius: "8px",
            },
          },
        }}
        sx={{
          width: "160px", // Change the width as needed
        }}
      />
    </div>
  );
}

export default SearchInput;
