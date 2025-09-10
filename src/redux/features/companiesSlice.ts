import { createSlice } from "@reduxjs/toolkit";

const companiesSlice = createSlice({
    name: "companies",
    initialState: {
        companies: [] as Array<{ id: number; name: string }>,
    },
    reducers: {}
});

export default companiesSlice.reducer;