import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { getCollectionData } from "../../utils/firebase";

type ProductsStateType = {
  events: DocumentData[] | null;
  merch: DocumentData[] | null;
};

const initialState: ProductsStateType = {
  events: null,
  merch: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const eventsPromise = getCollectionData("events");
      const merchPromise = getCollectionData("merch");
      const [events, merch] = await Promise.all([eventsPromise, merchPromise]);

      events.forEach((event: any) => {
        event.date = new Date(event?.date?.seconds * 1000);
      });

      events.sort((a, b) => a.date - b.date);

      return { events, merch };
    } catch (err) {
      console.error(err);
      return { events: null, merch: null };
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.events = payload.events;
      state.merch = payload.merch;
    });
  },
});

export default productsSlice.reducer;
