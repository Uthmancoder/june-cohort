import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AllProducts from "./AllProducts";

const rootReducer = AllProducts;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
