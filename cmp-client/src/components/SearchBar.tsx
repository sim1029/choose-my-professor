import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { ChangeEvent, FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { Theme, useTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/";

export type ProfessorResult = {
  comments?: string[];
  rating?: number;
  url?: string;
  name?: string;
  tags?: TagAttribute;
};

type TagAttribute = {
  [key: string]: number;
};

const courseTags = [
  "accessible outside class",
  "amazing lectures",
  "beware of pop quizzes",
  "caring",
  "clear grading criteria",
  "extra credit",
  "get ready to read",
  "gives good feedback",
  "graded by few things",
  "group projects",
  "hilarious",
  "inspirational",
  "lecture heavy",
  "lots of homework",
  "online savvy",
  "participation matters",
  "respected",
  '"skip class? you won\'t pass."',
  "so many papers",
  "tests are tough",
  "tests? not many",
  "tough grader",
  "would take again",
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

type ProfessorsResponse = {
  // Define the shape of API response
  profs: string[];
};

interface SearchBarProps {
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchBar = ({ setSearchResults }: SearchBarProps) => {
  const theme = useTheme();
  const [tags, setTags] = React.useState<string[]>([]);
  const [course, setCourse] = React.useState<string>("");
  const [professors, setProfessors] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the text value, e.g. submit to a server
    try {
      // Get the professors that teach this course
      const response = await axios.get<ProfessorsResponse>(
        BASE_URL + "professor-for-course",
        {
          params: {
            course: course,
          },
        }
      );
      setProfessors(response.data.profs);
      let resProfs = response.data.profs;

      // Get all the required data for each professor to pass to the list
      const urls = ["comments", "rating", "url", "name", "tags"];

      let professorResults: ProfessorResult[] = [];

      // Create an array of Promises that resolve to the data from each URL for each professor
      const promises = resProfs.flatMap((professor) => {
        return urls.map((url) => {
          return axios
            .get(BASE_URL + url, {
              params: {
                course: course,
                professor: professor,
              },
            })
            .then((response) => {
              return response.data;
            })
            .catch((error) => {
              console.error(error);
              return null;
            });
        });
      });

      try {
        // Wait for all Promises to resolve and collect the results in a new array
        const results = await Promise.all(promises);

        console.log("RESULTS:", results);

        // Collect results for each professor in a new array
        resProfs.forEach((professor, index) => {
          const currResult: ProfessorResult = {};
          const professorResult = results.slice(
            index * urls.length,
            (index + 1) * urls.length
          );
          currResult.comments = professorResult[0].comments;
          currResult.rating = professorResult[1].rating;
          currResult.url = professorResult[2].url;
          currResult.name = professorResult[3].name;
          currResult.tags = professorResult[4];
          professorResults.push(currResult);
        });

        // Do something with the results for each professor
        console.log("PROF RESULTS:", professorResults);

        setSearchResults(professorResults);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
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
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={4} mt={4} alignItems="center">
          <TextField
            id="course-no"
            label="Course No."
            variant="outlined"
            color="secondary"
            value={course}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCourse(event.target.value)
            }
          />
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel color="secondary" id="demo-multiple-chip-label">
              Tags
            </InputLabel>
            <Select
              labelId="mutliple-tag-chip"
              id="multiple-chip"
              color="secondary"
              multiple
              value={tags}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {courseTags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  <Checkbox
                    checked={tags.indexOf(tag) > -1}
                    color={"secondary"}
                  />
                  <ListItemText primary={tag} />
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
              type="submit"
            >
              Search
            </Button>
          </div>
        </Stack>
      </form>
    </Stack>
  );
};

export default SearchBar;
