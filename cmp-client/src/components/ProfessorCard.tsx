import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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
              }
            : {
                color: "primary.dark",
                border: 1.5,
                borderBottom: 0,
                p: 1,
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
        >
          <Grid item xs={2}>
            <Typography variant={"h4"}>6.9</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"body1"}>Simon Schueller</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"body2"}>Tag1, Tag2, Tag3...</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"h6"}>100 %</Typography>
          </Grid>
          {/* <Stack direction="row" justifyContent="center">
            <Typography variant={"caption"}>
              This is a summary of the professor's data produced by the model. 
              Or some other content is going to go here haven't decided yet
            </Typography>
          </Stack> */}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfessorCard;
