import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardHeader from "./CardHeader";

interface CardHeadersProps {
  tags: string[];
}

const CardHeaders = ({ tags }: CardHeadersProps) => {
  const capTags = tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1));

  return (
    <Grid item xs={12} mx={2}>
      <Stack direction="row" spacing={4} alignItems="end">
        <Typography variant={"h6"} fontWeight="bold">
          Professors
        </Typography>
        <Typography variant={"h6"} fontWeight="bold" color="primary.dark">
          ({capTags.length > 0 ? capTags.join(", ") : ""})
        </Typography>
      </Stack>
    </Grid>
  );
};

export default CardHeaders;
