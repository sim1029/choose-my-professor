import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardHeader from "./CardHeader";

const CardHeaders = () => {
  return (
    <Grid item xs={12} mx={2}>
      <Stack direction="row" spacing={4} alignItems="center">
        <Typography variant={"h5"} fontWeight="bold">
          Professors
        </Typography>
        <Typography variant={"h5"} fontWeight="bold" color="primary.dark">
          Tough Grader
        </Typography>
      </Stack>
    </Grid>
  );
};

export default CardHeaders;
