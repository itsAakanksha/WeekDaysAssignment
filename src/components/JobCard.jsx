import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "@mui/icons-material/Image";

import BoltIcon from "@mui/icons-material/Bolt";
function JobCard({
  companyName,
  jobDetailsFromCompany,
  jobRole,
  location,
  logoUrl,
  minJdSalary,
  jdLink,
  maxJdSalary,
  minExp,
}) {
  return (
    <Paper
      elevation={1}
      square={false}
      style={{
        marginBottom: "20px",
        maxWidth: "360px",
        borderRadius: "20px",
      }}
    >
      <Card
        style={{
          borderRadius: "20px",
        }}
      >
        <CardContent style={{ backgroundColor: " rgb(255,255,255)" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <img
              src={logoUrl}
              style={{ display: "block", width: "25px" }}
              alt=""
            />
            <div class="info-container">
              <Box
                component="h3"
                sx={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#8b8b8b",
                  mb: 0.5,
                  letterSpacing: 1,
                }}
              >
                {companyName}
              </Box>
              <h2 style={{ fontSize: 14, lineHeight: 1.5 }}>{jobRole}</h2>

              <p class="cards-sub-text">{location}</p>
            </div>
          </Box>

          <Typography
            variant="body2"
            component="p"
            sx={{ my: 1, color: "#4D596A" }}
          >
            {minJdSalary && maxJdSalary && (
              <span>
                Estimated salary: Rs {minJdSalary} - {maxJdSalary} LPA ✅
              </span>
            )}

            <br />
          </Typography>

          <Typography variant="body1">About Company:</Typography>
          <p style={{ fontSize: 14 }}>
            <strong>About us</strong>
          </p>

          <p className="details">
            <span style={{ fontSize: 14 }}>{jobDetailsFromCompany}</span>
          </p>

          <Box
            component="div"
            sx={{ textAlign: "center", mb: 1 }}
            className="view-jobs"
          >
            <a href={jdLink}>View job</a>
          </Box>

          <h3 className="experience">Minimum Experience</h3>
          <h2 style={{ fontSize: 14, lineHeight: 1 }}>{minExp} years</h2>
        </CardContent>
        <Box className="status-container">
          <Button
            variant="contained"
            startIcon={<BoltIcon color="warning" />}
            style={{
              backgroundColor: "#55EFC4",
              padding: "8px 18px",
              margin: "5px 0",
              textTransform: "capitalize",
            }}
            color="inherit"
            fullWidth
          >
            Easy Apply
          </Button>
        </Box>
      </Card>
    </Paper>
  );
}

export default JobCard;
