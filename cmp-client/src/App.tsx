import "./App.css";
import ProfessorCard from "./components/ProfessorCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardHeaders from "./components/CardHeaders";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";

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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container rowSpacing={10} px={4}>
        <Grid item xs={12}>
          <Navbar></Navbar>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            rowSpacing={0}
            px={4}
            columnSpacing={{ xs: 0, lg: 4 }}
          >
            <CardHeaders />
            <ProfessorCard isTopCard={true} />
            <ProfessorCard />
            <ProfessorCard />
            <ProfessorCard />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
