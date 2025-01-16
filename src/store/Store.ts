
import {configureStore} from "@reduxjs/toolkit";
import StaffSlice from "../reducers/StaffSlice.ts";


export const store = configureStore({
    reducer: {
        staff: StaffSlice,
    }
});

export default store;