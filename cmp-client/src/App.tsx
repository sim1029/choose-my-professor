import { useState } from 'react'
import rmpLogo from './assets/rmp-logo.png'
import './App.css'
import ProfessorCard from './components/ProfessorCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CardHeaders from './components/CardHeaders'

function App() {

  return (
    <Container>
      <Grid container rowSpacing={0} columnSpacing={{xs: 0, lg: 4}}>
        <CardHeaders />
        <ProfessorCard isTopCard={true}/>
        <ProfessorCard />
        <ProfessorCard />
        <ProfessorCard />
      </Grid>
    </Container>
  )
}

export default App
