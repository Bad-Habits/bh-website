import { createSlice } from "@reduxjs/toolkit";

type UserType = string | void;
type UserStateType = { user: UserType };

const initialState: UserStateType = { user: undefined };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: UserStateType, { payload }) => {
      console.log("setting user state to", payload);
      state.user = payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
