import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollectionData } from "../../utils/firebase";

type ProductsStateType = { tickets: any[]; merch: any[] };

const initialState: ProductsStateType = {
  tickets: [],
  merch: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const ticketsPromise = getCollectionData("tickets");
    const merchPromise = getCollectionData("merch");
    const [tickets, merch] = await Promise.all([ticketsPromise, merchPromise]);
    return { tickets, merch };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.tickets = payload.tickets;
      state.merch = payload.merch;
    });
  },
});

export default productsSlice.reducer;
