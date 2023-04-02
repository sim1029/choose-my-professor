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

const theme = createTheme({
  typography: {
    fontFamily: "Mulish",
  },
  palette: {
    primary: {
      main: "#F6F6F6",
      dark: "#979797",
    },
    secondary: {
      main: "#16151A",
    },
    info: {
      main: "#2B2DA7",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: "inherit",
        },
      },
    },
  },
});

function App() {
  const [searchResults, setSearchResults] = useState<ProfessorResult[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} px={4}>
        <Grid item xs={12}>
          <Navbar></Navbar>
        </Grid>
        <Grid item xs={12}>
          <SearchBar setSearchResults={setSearchResults}></SearchBar>
        </Grid>
        <Grid item xs={12} mt={2}>
          <ProfessorCardHeader />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Grid
            container
            rowSpacing={0}
            px={4}
            columnSpacing={{ xs: 0, lg: 4 }}
          >
            <CardHeaders />
            {searchResults.map((professorData) => {
              return (
                <ProfessorCard
                  key={professorData.name}
                  professorData={professorData}
                ></ProfessorCard>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
