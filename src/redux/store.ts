// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "../redux/features/companiesSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    companies: companiesReducer,
  },
});

