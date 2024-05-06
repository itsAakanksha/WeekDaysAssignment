import React, { useState, useEffect, useCallback, Suspense } from "react";
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

  const fetchData = useCallback(
    async (pageOffset) => {
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
        console.log("data is ", result.jdList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );
  // Effect hook to fetch data when component mounts
  useEffect(() => {
    fetchData(0);
  }, [fetchData]);

  // Callback to handle scrolling
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

  // Effect hook to fetch more data when pageIndex changes
  useEffect(() => {
    if (pageIndex > 0) {
      const offset = pageIndex * 10;
      fetchData(offset);
    }
  }, [pageIndex, fetchData]);

  // Create MUI theme
  const theme = createTheme({
    typography: {
      fontFamily: '"Lexend", sans-serif',
    },
  });

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <ThemeProvider theme={theme}>
        <Filter />
        <div className="cont">
          <JobList />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}
export default App;
