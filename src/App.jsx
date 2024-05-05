import React, { useEffect } from "react";
import JobCard from "./components/JobCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import JobList from "./components/JobList";

function App() {

  // Fetching the Job Data
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[]);


  
  const theme = createTheme({
    typography: {
      fontFamily: ' "Lexend", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="cont">
        <JobList />
      </div>
    </ThemeProvider>
  );
}

export default App;
