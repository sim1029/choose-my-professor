import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LanguageIcon from "@mui/icons-material/Language";
import internet from "../assets/internet.png";
import { ProfessorResult } from "./SearchBar";

interface ProfessorCardProps {
  isTopCard?: boolean;
  professorData: ProfessorResult;
}

const ProfessorCard = ({ isTopCard, professorData }: ProfessorCardProps) => {
  return (
    <Grid item xs={12}>
      <Paper
        elevation={0}
        variant="outlined"
        square={true}
        sx={
          isTopCard
            ? {
                color: "primary.dark",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                border: 1.5,
                borderBottom: 0,
                p: 1,
                borderColor: "primary.main",
              }
            : {
                color: "primary.dark",
                border: 1.5,
                borderBottom: 0,
                p: 1,
                borderColor: "primary.main",
              }
        }
      >
        <Grid
          container
          p={4}
          color="secondary"
          sx={
            isTopCard
              ? {
                  bgcolor: "primary.main",
                  color: "secondary.main",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }
              : {
                  bgcolor: "primary.main",
                  color: "secondary.main",
                }
          }
          alignItems="center"
        >
          <Grid item xs={1}>
            <Typography variant={"h6"} fontWeight="bold">
              {professorData.rating}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"body1"} fontWeight="bold">
              {professorData.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"body1"} fontWeight="bold">
              {professorData.tags ? Object.keys(professorData.tags) : []}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"body1"} fontWeight="bold">
              100 %
            </Typography>
          </Grid>
          <Grid item xs={1} container justifyContent="end">
            <a href={professorData.url}>
              <img src={internet} width={32}></img>
            </a>
          </Grid>
        </Grid>
        <Divider></Divider>
        <Grid
          container
          p={4}
          color="secondary"
          sx={{
            bgcolor: "primary.main",
            color: "secondary.main",
          }}
          alignItems="center"
        >
          <Grid item xs={5}>
            <Stack direction="row" spacing={4}>
              <Typography
                variant={"subtitle2"}
                fontWeight="bold"
                flexShrink={0}
              >
                Positive Review
              </Typography>
              <Typography
                variant={"subtitle2"}
                sx={{ maxWidth: 300 }}
                color="primary.dark"
              >
                {professorData.comments ? professorData.comments[0] : ""}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack direction="row" spacing={4}>
              <Typography
                variant={"subtitle2"}
                flexShrink={0}
                fontWeight="bold"
              >
                Negative Review
              </Typography>
              <Typography
                variant={"subtitle2"}
                sx={{ maxWidth: 300 }}
                color="primary.dark"
              >
                {professorData.comments ? professorData.comments[1] : ""}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfessorCard;
