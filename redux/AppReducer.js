import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  loading: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIncrementCounter: (state) => {
      state.counter += 1;
    },
    setAppLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAppLoader, setIncrementCounter } = appReducer.actions;

export default appReducer.reducer;
