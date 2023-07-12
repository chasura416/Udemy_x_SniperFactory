import { configureStore } from '@reduxjs/toolkit';
import canvasReducer from "./redux/modules/canvasSlice";

const Store = configureStore({
  reducer: {
    canvas: canvasReducer,
  },
});

export default Store;
