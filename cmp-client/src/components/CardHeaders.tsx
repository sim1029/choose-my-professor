import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardHeader from "./CardHeader";

const CardHeaders = () => {
  return (
    <Grid item xs={12} mb={3}>
      <Grid container px={5}>
        <CardHeader size={1}>Rating</CardHeader>
        <CardHeader size={3}>Name</CardHeader>
        <CardHeader size={5}>Tags</CardHeader>
        <CardHeader size={3}>Match %</CardHeader>
      </Grid>
    </Grid>
  );
};

export default CardHeaders;
