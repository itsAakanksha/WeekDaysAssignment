import React, { useState, useEffect, useCallback } from "react";
import JobCard from "./components/JobCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import JobList from "./components/JobList";
import { useDispatch } from "react-redux";
import { setJobData } from "./store/JobSlice";
import Filter from "./components/Filter.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  const [pageIndex, setPageIndex] = useState(0);
  const dispatch = useDispatch();

  const fetchData = useCallback(async (pageOffset) => {
    setLoading(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: pageOffset,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      // setData((prevData) => [...prevData,...result.jdList]);
      dispatch(setJobData(result.jdList));
      console.log("data is ",result.jdList)
    } catch (error) {
      console.error("Error fetching data:", error);
     
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData(0); 
  }, [fetchData]);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      setPageIndex((prevIndex) => prevIndex + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (pageIndex > 0) {
      const offset = pageIndex * 10;
      fetchData(offset);
    }
  }, [pageIndex, fetchData]);

  const theme = createTheme({
    typography: {
      fontFamily: '"Lexend", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Filter/>
    <div className="cont">
        <JobList  />
        {loading && <div>Loading...</div>}
      </div>
    </ThemeProvider>
  );
}

export default App;


