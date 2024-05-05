import React from 'react'
import JobCard from './components/JobCard'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import JobList from './components/JobList';

function App() {


  const theme = createTheme({
    typography: {
      fontFamily: ' "Lexend", sans-serif',
    },
 
  });


  return (
    <ThemeProvider theme={theme}>
    <div className='cont'>
   <JobList/>
    </div>
    </ThemeProvider>
  )
}

export default App