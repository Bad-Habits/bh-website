import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CountType = {
  count: number;
  diff: number;
};

const initialState: CountType = { count: 0, diff: 1 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDiff: (state, action: PayloadAction<number>) => {
      state.diff = action.payload;
    },
    inc: (state) => {
      state.count += state.diff;
    },
    dec: (state) => {
      state.count -= state.diff;
    },
  },
});

export const { setDiff, inc, dec } = counterSlice.actions;

export default counterSlice.reducer;
