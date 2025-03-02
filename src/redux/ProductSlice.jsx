import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

let initialData = {
  products: [],
  selectedProduct: [],
  status: "",
  error: "",
  cart: [],
};

export let fetchData = createAsyncThunk("fetchData/fetch", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");

    const data = response.data.products;

    return data;
  } catch (error) {
    throw error;
  }
});

export const productSlice = createSlice({
  name: "products",
  initialState: initialData,
  reducers: {
    fetchData: (state, action) => {
      state.products = action.payload.products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice;
