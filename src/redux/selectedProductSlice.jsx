import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let productState = {
  selectedProduct: {},
  status: "",
  error: null,
};

export const fetchProduct = createAsyncThunk("fetchProduct", async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    const data = response.data;

    return data;
  } catch (err) {
    throw err;
  }
});

export const selectedProductSlice = createSlice({
  name: "Selected Product",
  initialState: productState,
  reducers: {
    fetchProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    removeProduct: (state) => {
      state.selectedProduct = {};
      state.status = "loading";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { removeProduct } = selectedProductSlice.actions;
