import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LanguageIcon from "@mui/icons-material/Language";
import internet from "../assets/internet.png";
import { ProfessorResult } from "./SearchBar";
import Chip from "@mui/material/Chip";
import { keyframes } from "@emotion/react";

interface ProfessorCardProps {
  isTopCard?: boolean;
  isBottomCard?: boolean;
  professorData: ProfessorResult;
}

const ProfessorCard = ({
  isTopCard,
  isBottomCard,
  professorData,
}: ProfessorCardProps) => {
  const top = isTopCard ? 10 : 0;
  const bottom = isBottomCard ? 10 : 0;
  const borderStyles = { bottom: bottom, top: top };

  const dataCount = professorData.tags
    ? Object.entries(professorData.tags).reduce((acc, [key, value]) => {
        if (Number.isInteger(value)) {
          return acc + value;
        }
        return acc;
      }, 0)
    : 0;

  const dataCountCategory =
    dataCount > 5 ? (dataCount > 20 ? "Dense" : "Sufficient") : "Sparse";

  return (
    <Grid item xs={12}>
      <Paper
        elevation={0}
        variant="outlined"
        square={true}
        sx={{
          color: "primary.dark",
          borderTopLeftRadius: borderStyles.top,
          borderTopRightRadius: borderStyles.top,
          borderBottomRightRadius: borderStyles.bottom,
          borderBottomLeftRadius: borderStyles.bottom,
          border: 1.5,
          borderBottom: isBottomCard ? 1.5 : 0,
          p: 1,
          borderColor: "primary.main",
        }}
      >
        <Grid
          container
          p={4}
          color="secondary"
          sx={{
            bgcolor: "primary.main",
            color: "secondary.main",
            borderTopLeftRadius: borderStyles.top,
            borderTopRightRadius: borderStyles.top,
          }}
          alignItems="center"
        >
          <Grid item xs={1}>
            <Typography variant={"h6"} fontWeight="bold">
              {professorData.rating}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant={"body1"} fontWeight="bold">
              {professorData.name}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant={"body2"}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {professorData.tags
                  ? Object.keys(professorData.tags).map((key, index) =>
                      professorData.tags && key !== "" && index < 3 ? (
                        <Chip
                          key={key}
                          label={key.charAt(0).toUpperCase() + key.slice(1)}
                        />
                      ) : null
                    )
                  : []}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant={"body1"} fontWeight="bold">
              {dataCountCategory}
            </Typography>
          </Grid>
          <Grid item xs={1} container justifyContent="end">
            <a href={professorData.url} target={"_blank"}>
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
            borderBottomRightRadius: borderStyles.bottom,
            borderBottomLeftRadius: borderStyles.bottom,
          }}
          alignItems="start"
        >
          <Grid item xs={5}>
            <Stack direction="row" spacing={2} px={1}>
              <Typography
                variant={"subtitle2"}
                fontWeight="bold"
                flexShrink={0}
              >
                {professorData.comments && professorData.comments.length > 0
                  ? "Positive Review"
                  : ""}
              </Typography>
              <Typography
                variant={"subtitle2"}
                sx={{ maxWidth: 300 }}
                color="primary.dark"
              >
                {professorData.comments && professorData.comments.length > 0
                  ? professorData.comments[0].length > 100
                    ? professorData.comments[0].slice(0, 100) + "..."
                    : professorData.comments[0]
                  : ""}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack direction="row" spacing={4} px={1}>
              <Typography
                variant={"subtitle2"}
                flexShrink={0}
                fontWeight="bold"
              >
                {professorData.comments && professorData.comments.length == 2
                  ? "Negative Review"
                  : ""}
              </Typography>
              <Typography
                variant={"subtitle2"}
                sx={{ maxWidth: 300 }}
                color="primary.dark"
              >
                {professorData.comments && professorData.comments.length == 2
                  ? professorData.comments[1].length > 100
                    ? professorData.comments[1].slice(0, 100) + "..."
                    : professorData.comments[1]
                  : ""}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfessorCard;
