import React from 'react'
import JobCard from './JobCard'
import   Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
function JobList() {

    const jobs = [1,2,3]
  return (
    
   
    <Grid container spacing={1} justifyContent="center"
    alignItems="center">
    {jobs.map(job => (
      <Grid item xs={12} sm={6} md={4} key={job.id}>
        <JobCard />
      </Grid>
    ))}
  </Grid>

 
  )
}

export default JobList