import { createSlice } from "@reduxjs/toolkit";

type UserType = string | void;
type UserStateType = { userDoc: UserType };

const initialState: UserStateType = { userDoc: undefined };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: UserStateType, { payload }) => {
      console.log("setting user state to", payload);
      state.userDoc = payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
