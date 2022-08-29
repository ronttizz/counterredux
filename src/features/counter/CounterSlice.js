import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload; // count refers to initialState count
    },
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
