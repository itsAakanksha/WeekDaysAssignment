import { configureStore } from "@reduxjs/toolkit";
import job from "./JobSlice";

export default configureStore({
    reducer:{
        job
    }
})