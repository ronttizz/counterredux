import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
  },
  reducers: {
    increment: (state) => {
      state.count += 1; // count refers to initialState count
    },
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
