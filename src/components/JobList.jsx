import React from "react";
import JobCard from "./JobCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

function JobList() {
  const originalData = useSelector((state) => state.job.jobData);
  const filteredData = useSelector((state) => state.job.filteredData);

  const dataToDisplay = filteredData.length > 0 ? filteredData : originalData;

  return (
    <Container>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        {dataToDisplay.map((list, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <JobCard {...list} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default JobList;
