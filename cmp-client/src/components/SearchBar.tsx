import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const courseTags = [
  {
    value: "TG",
    label: "Tough Grader",
  },
  {
    value: "PB",
    label: "Project Based",
  },
];

const SearchBar = () => {
  return (
    <Stack
      alignItems="center"
      p={8}
      sx={{ backgroundColor: "primary.main" }}
      mx={2}
    >
      <Stack direction="row" spacing={2}>
        <Typography variant="h4" fontWeight="bold">
          Find
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary.dark"
          sx={{ textDecoration: "underline 2px" }}
        >
          Professor
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4} mt={4} alignItems="center">
        <TextField
          id="outlined-basic"
          label="Course No."
          variant="outlined"
          color="secondary"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Tags"
          defaultValue="TG"
          color="secondary"
        >
          {courseTags.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            size="large"
            startIcon={<SearchIcon />}
          >
            Find Professor
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

export default SearchBar;
