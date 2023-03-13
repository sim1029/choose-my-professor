import Typography from "@mui/material/Typography"

interface CardHeaderProps {
  children: string;
}

const CardHeader = ({children}: CardHeaderProps) => {
  return (
    <Typography variant="caption" sx={{color: "text.secondary", fontWeight: "bold"}}>
      {children}
    </Typography>
  )
}

export default CardHeader