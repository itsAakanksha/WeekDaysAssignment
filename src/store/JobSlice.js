import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobData : [],
    filteredData: [],
}


const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{
        setJobData:(state,action)=>{
           state.jobData = [...state.jobData, ...action.payload];
        },

        filterJobData: (state, action) => {
            const { selectedRoles } = action.payload;
            if (selectedRoles.length === 0) {
                state.filteredData = state.jobData;
            } else {
                state.filteredData = state.jobData.filter(item => selectedRoles.includes(item.jobRole));
            }
        }
    }
})

export const {setJobData, filterJobData} = jobSlice.actions;

export default jobSlice.reducer;