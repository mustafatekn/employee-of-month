import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../types";

const initialState: UserState = {
  employees: [],
};

export const appSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<User[]>) => {
      state.employees = action.payload;
    },
  },
});

export const { setEmployees } = appSlice.actions;
export default appSlice.reducer;
