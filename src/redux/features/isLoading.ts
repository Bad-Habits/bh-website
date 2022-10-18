import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => payload,
  },
});

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
