import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    toogleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovies = movieResults;
    },
  },
});

export const { toogleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
