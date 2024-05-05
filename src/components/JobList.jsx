import React from 'react';
import JobCard from './JobCard';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux'; 

function JobList() {
  const lists = useSelector((state) => state.job.jobData); 
  return (
    <Container>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {lists.map((list, index) => (
          <Grid item xs={12} sm={6} md={4} key={list.jdUid}>
            <JobCard {...list} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default JobList;
