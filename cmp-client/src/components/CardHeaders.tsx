import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardHeader from "./CardHeader";

const CardHeaders = () => {
  return (
    <Grid item xs={12} mb={3}>
      <Grid container px={5}>
        <CardHeader size={2}>Rating</CardHeader>
        <CardHeader size={4}>Name</CardHeader>
        <CardHeader size={4}>Tags</CardHeader>
        <CardHeader size={2}>Confidence</CardHeader>
      </Grid>
    </Grid>
  );
};

export default CardHeaders;