import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import CardHeader from "./CardHeader"

const CardHeaders = () => {
  return (
    <Grid item xs={12} mb={2}>
      <Stack direction="row" justifyContent="space-between" px={4}>
        <CardHeader>Rating</CardHeader>
        <CardHeader>Name</CardHeader>
        <CardHeader>Tags</CardHeader>
        <CardHeader>Confidence</CardHeader>
      </Stack>
    </Grid>
  )
}

export default CardHeaders