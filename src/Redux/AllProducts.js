import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllProducts: [],
  NumberCount: 0,
};

const AllProducts = createSlice({
  name: "NuberSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.AllProducts.push(action.payload);
    },
    removeProduct: (state, action) => {
      let FilteredData = state.AllProducts.filter(
        (data) => data.id !== action.payload
      );
      state.AllProducts = FilteredData;
    },
    increaseCount: (state) => {
      state.NumberCount++;
    },
    decreaseCount: (state) => {
      state.NumberCount--;
    },
  },
});
export const { addProduct, removeProduct, increaseCount, decreaseCount } =
  AllProducts.actions;
export default AllProducts.reducer;
