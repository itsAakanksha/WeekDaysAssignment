import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobData: [],
  filteredData: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobData: (state, action) => {
      state.jobData = [...state.jobData, ...action.payload];
    },

    filterJobData: (state, action) => {
      const {
        selectedRoles,
        selectedCompanyName,
        selectedLocation,
        selectedExperience,
        selectedMode,
        selectedMinBasePay,
        selectedTechStack,
      } = action.payload;

      // Apply filters based on selectedRoles
      let filteredData = state.jobData;

      if (selectedRoles.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectedRoles.includes(item.jobRole)
        );
      }

      // Remove "Tech Lead" from selectedTechStack
      const filteredTechStack = filteredData.filter(
        (stack) => stack !== "tech lead"
      );

      // Apply filter based on filteredTechStack
      if (filteredTechStack.length > 0) {
        filteredData = filteredData.filter((item) =>
          filteredTechStack.includes(item.jobRole) && item!== "tech lead"
        );
      }

      // Apply filters based on selectedCompanyName
      if (selectedCompanyName.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectedCompanyName.includes(item.companyName)
        );
      }

      if (selectedLocation.length > 0) {
        filteredData = filteredData.filter((item) =>
          selectedLocation.includes(item.location)
        );
      }

      if (selectedMode.length > 0) {
        if (selectedMode.includes("onsite")) {
          filteredData = filteredData.filter(
            (item) => !item.location.toLowerCase().includes("remote")
          );
        } else if (selectedMode.includes("remote")) {
          filteredData = filteredData.filter((item) =>
            item.location.toLowerCase().includes("remote")
          );
        }
      }

      if (selectedMinBasePay) {
        const minBasePayString = String(selectedMinBasePay); // Convert to string
        const minBasePayNumber = Number(
          minBasePayString.replace(/[^0-9.-]+/g, "")
        ); // Remove non-numeric characters like 'L'
        filteredData = filteredData.filter(
          (item) => item.minJdSalary >= minBasePayNumber
        );
      }

      // Update state with filtered data
      state.filteredData = filteredData;
    },
  },
});

export const { setJobData, filterJobData } = jobSlice.actions;

export default jobSlice.reducer;
