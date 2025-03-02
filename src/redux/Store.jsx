import { productSlice } from "./ProductSlice";
import { configureStore } from "@reduxjs/toolkit";
import { selectedProductSlice } from "./selectedProductSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    selectedProduct: selectedProductSlice.reducer,
  },
});

export default store;
