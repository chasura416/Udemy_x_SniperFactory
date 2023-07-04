import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
}

const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducer: {
    updateMoviestore: (state, action) => {
      return (state = {...state, ...action.payload})
    },
    
  }


});
  
export default MovieSlice;