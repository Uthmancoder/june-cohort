import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberCount: 0,
};

const AllUsersSlice = createSlice({
  name: "NuberSlice",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.numberCount++;
    },
    decreaseCount: (state) => {
      state.numberCount--;
    },
  },
});

export const { increaseCount, decreaseCount } = AllUsersSlice.actions;
export default AllUsersSlice.reducer;
