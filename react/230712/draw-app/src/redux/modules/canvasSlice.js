import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: [],
  color: "#000000", // 초기 색상은 검정색으로 설정합니다
};


const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addPoint: (state, action) => {
      state.points.push(action.payload);
    },
    clearCanvas: (state) => {
      state.points = [];
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    
  },
});

export const { addPoint, clearCanvas, changeColor } = canvasSlice.actions;
export default canvasSlice.reducer;
