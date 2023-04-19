import "./App.css";
import ProfessorCard from "./components/ProfessorCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardHeaders from "./components/CardHeaders";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import SearchBar, { ProfessorResult } from "./components/SearchBar";
import ProfessorCardHeader from "./components/ProfessorCardHeader";
import cmpLogo from "./assets/cmp-logo.png";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

export type SearchState = "idle" | "loading" | "error";

function App() {
  const [searchResults, setSearchResults] = useState<ProfessorResult[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [searchState, setSearchState] = useState<SearchState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>(
    "An error has occured, please try again"
  );

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ height: "100vh" }}
    >
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
              <CircularProgress
                sx={{ color: "primary.dark" }}
              ></CircularProgress>
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
      <Grid container spacing={2} padding={4} mb={4}>
        <Grid item xs={12} mx={2}>
          <a href="/">
            <img src={cmpLogo} width={200}></img>
          </a>
          <Stack direction="row" justifyContent="space-between" pt={2} pb={4}>
            <Stack direction="row" spacing={6} sx={{ color: "secondary.main" }}>
              <Typography
                variant="subtitle2"
                component="a"
                href="https://github.com/sim1029/choose-my-professor"
                sx={{
                  textDecoration: "none",
                  color: "primary.dark",
                  fontWeight: "bold",
                }}
              >
                Github
              </Typography>
              <Typography
                variant="subtitle2"
                component="a"
                href="https://colab.research.google.com/drive/1IMQ6uUyEjLrSG-5X0xEaXK0qqvYqK5BR?usp=sharing#scrollTo=a8IFaGQpw3ca&line=10&uniqifier=2"
                sx={{
                  textDecoration: "none",
                  color: "primary.dark",
                  fontWeight: "bold",
                }}
              >
                Colab
              </Typography>
              <Typography
                variant="subtitle2"
                component="a"
                href="https://docs.google.com/document/d/1JMaN5sCyjvnUaBiUx2y94KqbWUbkiyIiioU4_6Hx0xo/edit#heading=h.gmipvu6potis"
                sx={{
                  textDecoration: "none",
                  color: "primary.dark",
                  fontWeight: "bold",
                }}
              >
                CS 1699
              </Typography>
            </Stack>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              component="a"
              href="https://forms.gle/nT1xFJugHGoEYYgc9"
              target="_blank"
            >
              Contact Us
            </Button>
          </Stack>

          <Divider sx={{ mb: 2 }}></Divider>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="caption">
              &#169; Choose My Professor. All rights reserved.
            </Typography>
            <Typography variant="caption">
              Made with ❤️ by
              <strong style={{ fontFamily: "Mulish" }}>
                {" "}
                Simon Schueller, David Teklea, Alex Wang
              </strong>
              , and
              <strong style={{ fontFamily: "Mulish" }}> Zach Heistand</strong>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
