import companiesData, { type ComapniesDataT } from "@/constant/company-list";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CompaniesState {
  companies: ComapniesDataT[];
}

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: companiesData,
  } as CompaniesState,
  reducers: {
    addCompany: (state, action: PayloadAction<ComapniesDataT>) => {
      state.companies = [...state.companies, action.payload];
    },
  },
});

export const { addCompany } = companiesSlice.actions;

export default companiesSlice.reducer;
