import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LanguageIcon from "@mui/icons-material/Language";
import internet from "../assets/internet.png";

interface ProfessorCardProps {
  isTopCard?: boolean;
}

const ProfessorCard = ({ isTopCard }: ProfessorCardProps) => {
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
              6.9
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"body1"} fontWeight="bold">
              Simon Schueller
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"body1"} fontWeight="bold">
              Tag1, Tag2, Tag3...
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"body1"} fontWeight="bold">
              100 %
            </Typography>
          </Grid>
          <Grid item xs={1} container justifyContent="end">
            <a href="https://www.ratemyprofessors.com/">
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
                variant={"subtitle1"}
                fontWeight="bold"
                flexShrink={0}
              >
                Info-1
              </Typography>
              <Typography
                variant={"subtitle2"}
                sx={{ maxWidth: 300 }}
                color="primary.dark"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack direction="row" spacing={4}>
              <Typography
                variant={"subtitle1"}
                flexShrink={0}
                fontWeight="bold"
              >
                Info-2
              </Typography>
              <Typography
                variant={"subtitle2"}
                sx={{ maxWidth: 300 }}
                color="primary.dark"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfessorCard;
