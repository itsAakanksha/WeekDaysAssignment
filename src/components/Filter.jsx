import { Container } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { filterJobData } from "../store/JobSlice";

const Jobs = [
  { title: "frontend" },

  { title: "data science" },
];

export default function Filter() {
  const data = useSelector((state)=>state.job.jobData)
  const [selectedRoles, setSelectedRoles] = useState([]);
  const dispatch = useDispatch();

  const handleRoleChange = (event, value) => {
    setSelectedRoles(value);
    dispatch(filterJobData({ selectedRoles: value }));
  };



  // To get Uniques data of each job Fields

  const getUniqueData = (data,property)=>{
    let newVal = data.map((currElem)=>{
      return currElem[property];
    })
   return newVal = [... new Set(newVal)]
    console.log("ej",newVal)
  }

  const jobRolesData = getUniqueData(data,'jobRole')


  return (
    <>
    <Container sx={{paddingTop:2, display:'flex', flexWrap:'wrap' }}>
    <Autocomplete 
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={jobRolesData}
      // getOptionLabel={(option) => option.jobRole}
      value={selectedRoles}
      onChange={handleRoleChange}
      defaultValue={[jobRolesData[0]]}
      renderInput={(params) => (
        <TextField {...params} label="Roles"  />
      )}
      sx={{ minWidth: "150px", marginX:1, marginY:1 }}
    />

    <Autocomplete 
    multiple
    limitTags={2}
    id="multiple-limit-tags"
    options={Jobs}
    getOptionLabel={(option) => option.title}
    defaultValue={[Jobs[1]]}
    renderInput={(params) => (
      <TextField {...params} label="No. of Employees"  />
    )}
    sx={{ minWidth: "150px", marginX:1, marginY:1 }}
  />
  <Autocomplete 
  multiple
  limitTags={2}
  id="multiple-limit-tags"
  options={Jobs}
  getOptionLabel={(option) => option.title}
  defaultValue={[Jobs[1]]}
  renderInput={(params) => (
    <TextField {...params} label="Experience"  />
  )}
  sx={{ minWidth: "150px", marginX:1, marginY:1 }}
/>
<Autocomplete 
multiple
limitTags={2}
id="multiple-limit-tags"
options={Jobs}
getOptionLabel={(option) => option.title}
defaultValue={[Jobs[1]]}
renderInput={(params) => (
  <TextField {...params} label="Remote"  />
)}
sx={{ minWidth: "150px", marginX:1, marginY:1 }}
/>
<Autocomplete 
multiple
limitTags={2}
id="multiple-limit-tags"
options={Jobs}
getOptionLabel={(option) => option.title}
defaultValue={[Jobs[1]]}
renderInput={(params) => (
  <TextField {...params} label="Tech Stack"  />
)}
sx={{ minWidth: "150px", marginX:1, marginY:1 }}
/>

<Autocomplete 
multiple
limitTags={2}
id="multiple-limit-tags"
options={Jobs}
getOptionLabel={(option) => option.title}
defaultValue={[Jobs[1]]}
renderInput={(params) => (
  <TextField {...params} label="Minimum Base Pay Salary"  />
)}
sx={{ minWidth: "150px", marginX:1, marginY:1 }}
/>

<Autocomplete 
multiple
limitTags={2}
id="multiple-limit-tags"
options={Jobs}
getOptionLabel={(option) => option.title}
defaultValue={[Jobs[1]]}
renderInput={(params) => (
  <TextField {...params} label="Search Company Name"  />
)}
sx={{ minWidth: "150px", marginX:1, marginY:1 }}
/>




 
</Container>
</>
  );
}

