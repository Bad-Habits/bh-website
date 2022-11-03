import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserInfo } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { getUser } from "../../utils/firebase";

// type UserSchema = {
//   displayName: string;
//   email: string;
//   phoneNumber: string;
//   createdAt: Date;
//   isAdmin: boolean;
// };
type UserType = DocumentData | null | undefined;
type UserStateType = { user: UserType };

const initialState: UserStateType = { user: undefined };

export const setUserThunk = createAsyncThunk(
  "auth/setUser",
  async (userAuth: UserInfo | null) => {
    if (!userAuth) return null;

    try {
      const userDoc = await getUser(userAuth);
      if (!userDoc) return null;

      const user = userDoc.data();
      return user || null;
    } catch (err) {
      console.error("Error in setUserThunk:", err);
      return null;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export default authSlice.reducer;
