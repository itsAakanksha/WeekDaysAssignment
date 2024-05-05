import React, {useState, useEffect } from "react";
import JobCard from "./components/JobCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import JobList from "./components/JobList";
import { useDispatch } from "react-redux";
import { setJobData } from "./store/JobSlice";


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
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
        const result = await response.json();
        dispatch(setJobData(result.jdList))
        console.log(result);
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false);
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
    (
      !loading ?
    (
      <ThemeProvider theme={theme}>
      <div className="cont">
        <JobList />
      </div>
    </ThemeProvider>
    )
    :
    (
      <div>Loading...</div>
    )
  )

  );
}

export default App;
