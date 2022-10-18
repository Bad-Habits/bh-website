import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/authSlice";
import isLoading from "../features/isLoading";

export const store = configureStore({
  reducer: {
    auth,
    isLoading,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
