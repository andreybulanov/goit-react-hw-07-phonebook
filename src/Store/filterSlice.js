import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
    name: "contacts/filter",
    initialState,
    reduser : {
        filter: (state, {payload}) => (state = payload),
    },
});

export const { filter } = filterSlice.actions;
export default filterSlice.reduser;