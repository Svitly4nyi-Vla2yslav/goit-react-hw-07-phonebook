import { createSlice } from "@reduxjs/toolkit";
// import { initialState } from "./initalState";



const filtersSlice = createSlice({
  name: "filter",
  initialState:'',
  reducers: {
    setStatusFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;