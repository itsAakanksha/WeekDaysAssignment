import { Container } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { filterJobData } from "../store/JobSlice";

const Jobs = [{ title: "frontend" }, { title: "data science" }];

export default function Filter() {
  const data = useSelector((state) => state.job.jobData);
  const dispatch = useDispatch();

  // States for each filter
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedCompanyName, setSelectedCompanyName] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedMode, setSelectedMode] = useState([]);
  const [selectedMinBasePay, setSelectedMinBasePay] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState([]);

  // Function to dispatch filter action with all selected values
  const applyFilters = () => {
    dispatch(
      filterJobData({
        selectedRoles: selectedRoles,
        selectedCompanyName: selectedCompanyName,
        selectedLocation: selectedLocation,
        selectedExperience: selectedExperience,
        selectedMode: selectedMode,
        selectedMinBasePay: selectedMinBasePay,
        selectedMinBasePay: selectedMinBasePay,
      })
    );
  };

  // Whenever filter is selected, this will run

  useEffect(() => {
    applyFilters();
  }, [
    selectedRoles,
    selectedCompanyName,
    selectedExperience,
    selectedLocation,
    selectedMode,
    selectedMinBasePay,
  ]);

  // To get unique data of each job field
  const getUniqueData = (data, property) => {
    let uniqueValues = data.map((currElem) => currElem[property]);
    uniqueValues = uniqueValues.filter((value) => value !== null);
    uniqueValues = [...new Set(uniqueValues)];
    return uniqueValues;
  };

  const jobRolesData = getUniqueData(data, "jobRole");
  const Company = getUniqueData(data, "companyName");
  const locat = getUniqueData(data, "location");
  const minExperience = getUniqueData(data, "minExp");
  const mode = ["remote", "onsite"];
  const minPay = ["0L", "10L", "20L", "30L", "40L"];

  return (
    <>
      <Container  sx={{ paddingTop: 2, display: "flex", flexWrap: "wrap" }}>
        {/* Job Roles Filter */}
        <Autocomplete
          multiple
          limitTags={2}
          id="job-roles-filter"
          options={jobRolesData}
          value={selectedRoles}
          onChange={(event, value) => setSelectedRoles(value)}
          renderInput={(params) => <TextField {...params} label="Roles" />}
          sx={{ minWidth: "150px", maxWidth: "400px", marginX: 1, marginY: 1 ,  }}
          size="small"
        />

        {/* Company Name Filter */}
        <Autocomplete
          multiple
          limitTags={2}
          id="company-name-filter"
          options={Company}
          // getOptionLabel={(option) => option.title}
          value={selectedCompanyName}
          onChange={(event, value) => setSelectedCompanyName(value)}
          renderInput={(params) => (
            <TextField {...params} label="Company Name" />
          )}
          sx={{ minWidth: "150px", maxWidth: "400px", marginX: 1, marginY: 1 }}
          size="small"
          
        />

        <Autocomplete
          multiple
          limitTags={2}
          id="company-name-filter"
          options={locat}
          // getOptionLabel={(option) => option.title}
          value={selectedLocation}
          onChange={(event, value) => setSelectedLocation(value)}
          renderInput={(params) => <TextField {...params} label="Location" />}
          sx={{ minWidth: "150px", maxWidth: "400px", marginX: 1, marginY: 1 }}
          size="small"
        />

        <Autocomplete
          multiple
          limitTags={2}
          id="company-name-filter"
          options={minExperience}
          value={selectedExperience}
          onChange={(event, value) => setSelectedExperience(value)}
          renderInput={(params) => (
            <TextField {...params} label="Min Experience" />
          )}
          sx={{ minWidth: "150px", maxWidth: "400px", marginX: 1, marginY: 1 }}
          size="small"
        />

        <Autocomplete
          multiple
          limitTags={2}
          id="company-name-filter"
          options={mode}
          value={selectedMode}
          onChange={(event, value) => setSelectedMode(value)}
          renderInput={(params) => <TextField {...params} label="Remote" />}
          sx={{ minWidth: "150px", maxWidth: "400px", marginX: 1, marginY: 1 }}
          size="small"
        />

        <Autocomplete
          multiple
          limitTags={2}
          id="company-name-filter"
          options={minPay}
          value={selectedMinBasePay}
          onChange={(event, value) => setSelectedMinBasePay(value)}
          renderInput={(params) => (
            <TextField {...params} label="Min Base Salary" />
          )}
          sx={{ minWidth: "150px", maxWidth: "400px", marginX: 1, marginY: 1 }}
          size="small"
        />
      </Container>
    </>
  );
}
