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
function JobCard() {
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
    <Card  style={{
   
      borderRadius: "20px",
      
    }}>
      <CardContent style={{backgroundColor:' rgb(255,255,255)' }}>
        <Box sx={{display:'flex', gap:1}}>
       
        <img src="	https://storage.googleapis.com/weekday-assets/airtableAttachment_1713846233282_m137p.jpg" style={{display:'block', width:'25px'}} alt="" />
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
                fampay
              </Box>
              <h2 style={{ fontSize: 14, lineHeight: 1.5 }}>
                Backend Engineer
              </h2>
           
            <p class="cards-sub-text">Bangalore</p>
          </div>
        </Box>

        <Typography
          variant="body2"
          component="p"
          sx={{ my: 1, color: "#4D596A" }}
        >
          Estimated salary: Rs18 - 35 LPA <span> ✅</span>
          <br />
        </Typography>
        <Typography variant="body1">About Company:</Typography>
        <p style={{ fontSize: 14 }}>
          <strong>About us</strong>
        </p>

        <p className="details">
          <span style={{ fontSize: 14 }}>
            FamPay is building India’s first neo-bank exclusively teens. FamPay
            helps teens make their own online and offline payments through UPI,
            FamPay App and FamCard. Our aim is to make banking cool for teens
            and to help them learn the value of money, savings and spending
            wisely. We are on a mission to raise a new, financially aware
            generation, and drive 250 Million+ Indian teenagers to kickstart
            their financial journey super early in their life.
          </span>
        </p>

        <Box
          component="div"
          sx={{ textAlign: "center", mb: 1 }}
          className="view-jobs"
        >
          <a href="">View job</a>
        </Box>

        <h3 className="experience">Minimum Experience</h3>
        <h2 style={{ fontSize: 14, lineHeight: 1 }}>3 years</h2>
      </CardContent>
      <Box className="status-container">
        <Button
          variant="contained"
          startIcon={<BoltIcon color="warning" />}
          style={{
            backgroundColor: "#55EFC4",
            padding: "8px 18px",
            margin: "5px 0",
            textTransform: 'capitalize'
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
