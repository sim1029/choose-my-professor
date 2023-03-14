import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface CardHeaderProps {
  size: number;
  children: string;
}

const CardHeader = ({ children, size }: CardHeaderProps) => {
  return (
    <Grid item xs={size}>
      <Typography
        variant="caption"
        sx={{ color: "primary.dark", fontWeight: "bold" }}
      >
        {children}
      </Typography>
    </Grid>
  );
};

export default CardHeader;
