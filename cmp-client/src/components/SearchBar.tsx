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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { Theme, useTheme } from '@mui/material/styles';
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

const courseTags = [
  {
    label: 'accessible outside class',
  },
  {
    label: 'amazing lectures',
  },
  {
    label: 'beware of pop quizzes',
  },
  {
    label: 'caring',
  },
  {
    label: 'clear grading criteria',
  },
  {
    label: 'extra credit',
  },
  {
    label: 'get ready to read',
  },
  {
    label: 'gives good feedback',
  },
  {
    label: 'graded by few things',
  },
  {
    label: 'group projects',
  },
  {
    label: 'hilarious',
  },
  {
    label: 'inspirational',
  },
  {
    label: 'lecture heavy',
  },
  {
    label: 'lots of homework',
  },
  {
    label: 'online savvy',
  },
  {
    label: 'participation matters',
  },
  {
    label: 'respected',
  },
  {
    label: '\"skip class? you won\'t pass.\"',
  },
  {
    label: 'so many papers',
  },
  {
    label: 'tests are tough'
  },
  {
    label: 'tests? not many',
  },
  {
    label: 'tough grader',
  },
  {
    label: 'would take again'
  }
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 8 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SearchBar = () => {
  const theme = useTheme();
  const [tags, setTags] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Stack
      alignItems="center"
      p={8}
      sx={{ backgroundColor: "primary.main", borderRadius: 2 }}
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
          id="course-no"
          label="Course No."
          variant="outlined"
          color="secondary"
        />
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel color="secondary" id="demo-multiple-chip-label">Tags</InputLabel>
          <Select
            labelId="mutliple-tag-chip"
            id="multiple-chip"
            color="secondary"
            multiple
            value={tags}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {courseTags.map((tag) => (
              <MenuItem
                key={tag.label}
                value={tag.label}
              >
                <Checkbox checked={tags.indexOf(tag.label) > -1} color={"secondary"} />
                <ListItemText primary={tag.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            size="large"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

export default SearchBar;
