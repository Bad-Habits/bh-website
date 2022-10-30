import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollectionData } from "../../utils/firebase";

type ProductsStateType = { events: any[]; merch: any[] };

const initialState: ProductsStateType = {
  events: [],
  merch: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const eventsPromise = getCollectionData("events");
    const merchPromise = getCollectionData("merch");
    const [events, merch] = await Promise.all([eventsPromise, merchPromise]);

    events.forEach((event) => {
      event.date = new Date(event.date.seconds * 1000);
    });

    return { events, merch };
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
