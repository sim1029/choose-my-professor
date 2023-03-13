import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface ProfessorCardProps {
  isTopCard?: boolean;
}

const ProfessorCard = ({isTopCard}: ProfessorCardProps) => {
  return (
    <Grid item xs={12} >
      <Paper 
        elevation={0} 
        variant="outlined" 
        square={true} 
        sx={isTopCard ? 
          {borderTopLeftRadius: 10, borderTopRightRadius: 10, border: 1.5, borderBottom: 0, borderColor: 'rgba(221, 221, 221, 0.8)', pb: 1} 
          : {border: 1.5, borderBottom: 0, borderColor: 'rgba(221, 221, 221, 0.8)', pb: 1}}
      >
        <Stack 
          direction="column" 
          spacing={2}
          mx={1} 
          mt={1} 
          p={2} 
          divider={<Divider orientation="horizontal" flexItem/>}
          sx={{bgcolor: 'rgba(221, 221, 221, 0.8)', borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant={"h4"}>
                6.9
              </Typography>
              <Typography variant={"body1"}>
                Simon Schueller
              </Typography>
              <Typography variant={"body2"}>
                Tag1, Tag2, Tag3...
              </Typography>
              <Typography variant={"h6"}>
                100 %
              </Typography>
          </Stack> 
          <Stack direction="row" justifyContent="center">
            <Typography variant={"caption"}>
              This is a summary of the professor's data produced by the model. 
              Or some other content is going to go here haven't decided yet
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  )
}

export default ProfessorCard;