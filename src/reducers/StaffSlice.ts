import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Staff} from "../models/Staff";

interface staffState{
    staff:Staff[];
};

export const initialState:staffState={
    staff:[],
};

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        add: (state, action:PayloadAction<Staff>) => {
           state.staff.push(action.payload);
        },
        remove: (state, action:PayloadAction<string>) => {
            state.staff = state.staff.filter(
                staff=>staff.id !== action.payload);
        }
    }
})

export const {add, remove} = staffSlice.actions;

export default staffSlice.reducer;