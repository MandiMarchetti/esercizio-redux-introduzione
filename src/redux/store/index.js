import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const resultFavorites = configureStore({
  reducer: mainReducer,
});

export default resultFavorites;
