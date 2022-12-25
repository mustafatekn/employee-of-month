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
    vote: (state, action) => {
      const index = state.employees.findIndex(
        (user) => user.id === action.payload.id
      );
      state.employees[index].voteCount! += 1;
      //order employees by vote count
      state.employees.sort((a: User, b: User) => b.voteCount! - a.voteCount!);
    },
  },
});

export const { setEmployees, vote } = appSlice.actions;
export default appSlice.reducer;
