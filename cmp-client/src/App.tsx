import "./App.css";
import ProfessorCard from "./components/ProfessorCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardHeaders from "./components/CardHeaders";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import SearchBar, { ProfessorResult } from "./components/SearchBar";
import ProfessorCardHeader from "./components/ProfessorCardHeader";
import { useState } from "react";
import { Alert, CircularProgress, LinearProgress, Stack } from "@mui/material";

export type SearchState = "idle" | "loading" | "error";

function App() {
  const [searchResults, setSearchResults] = useState<ProfessorResult[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [searchState, setSearchState] = useState<SearchState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>(
    "An error has occured, please try again"
  );

  return (
    <Grid container spacing={2} p={4}>
      <Grid item xs={12}>
        <Navbar></Navbar>
      </Grid>
      <Grid item xs={12}>
        <SearchBar
          setSearchResults={setSearchResults}
          setTags={setTags}
          setSearchState={setSearchState}
          setErrorMsg={setErrorMsg}
        ></SearchBar>
      </Grid>
      {searchState === "loading" && (
        <Grid item xs={12} mt={4}>
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress sx={{ color: "primary.dark" }}></CircularProgress>
          </Stack>
        </Grid>
      )}
      {searchState === "error" && (
        <Grid item xs={12} mt={4} mx={8}>
          <Alert variant="outlined" severity="error">
            {errorMsg}
          </Alert>
        </Grid>
      )}
      {searchResults.length > 0 && searchState === "idle" && (
        <>
          <Grid item xs={12} mt={2}>
            <ProfessorCardHeader tags={tags} />
          </Grid>
          <Grid item xs={12} mt={2}>
            <Grid
              container
              rowSpacing={0}
              px={2}
              columnSpacing={{ xs: 0, lg: 4 }}
            >
              <CardHeaders />
              {searchResults.map((professorData, index) => {
                return (
                  <ProfessorCard
                    key={professorData.name}
                    professorData={professorData}
                    isTopCard={index === 0}
                    isBottomCard={index === searchResults.length - 1}
                  ></ProfessorCard>
                );
              })}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default App;
