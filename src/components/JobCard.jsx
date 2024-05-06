import React from "react";
import { useState } from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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

  const [showAllDetails, setShowAllDetails] = useState(false);
  return (
    <Paper
      className="jobCardd"
      elevation={1}
      square={false}
      sx={{
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
            {logoUrl && (
              <img
                src={logoUrl}
                style={{ display: "block", width: "25px" }}
                alt=""
              />
            )}
            <div className="info-container">
              {companyName && (
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
              )}
              {jobRole && (
                <h2 style={{ fontSize: 14, lineHeight: 1.5 }}>{jobRole}</h2>
              )}
              {location && <p className="cards-sub-text">{location}</p>}
            </div>
          </Box>

          {minJdSalary && maxJdSalary && (
            <Typography
              variant="body2"
              component="p"
              sx={{ my: 1, color: "#4D596A" }}
            >
              Estimated salary: Rs {minJdSalary} - {maxJdSalary} LPA ✅
              <br />
            </Typography>
          )}

          {jobDetailsFromCompany && (
            <>
              <Typography variant="body1">About Company:</Typography>
              <p style={{ fontSize: 14 }}>
                <strong>About us</strong>
              </p>
              <p>
              <span style={{ fontSize: 14 }}>
              {showAllDetails
                ? jobDetailsFromCompany // If showAllDetails is true, display all jobDetailsFromCompany
                : jobDetailsFromCompany.substring(0, 400)} {/* Otherwise, display only the first 400 characters */}
            </span>
            {!showAllDetails && (
              <span className="details" style={{ fontSize: 14 }}>
                {jobDetailsFromCompany.substring(400, 500)}
              </span>
            )}
              </p>
            </>
          )}

          { !showAllDetails && (
            <Box
              component="div"
              sx={{ textAlign: "center", mb: 1 }}
              className="view-jobs"
            >
              <a onClick={() => setShowAllDetails(!showAllDetails)}>View job</a>
            </Box>
          )}

          {minExp && (
            <>
              <h3 className="experience">Minimum Experience</h3>
              <h2 style={{ fontSize: 14, lineHeight: 1 }}>{minExp} years</h2>
            </>
          )}
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
