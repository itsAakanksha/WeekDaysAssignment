import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobData : [],
}


const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{
        setJobData:(state,action)=>{
         state.jobData = action.payload
        }
    }
})

export const {setJobData} = jobSlice.actions;

export default jobSlice.reducer;