import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import MovieStore from "./MovieStore"

const store = configureStore((
  reducer: {
    MovieStore: MovieStore,

  }
))

export default store;