import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";

const appStore = configureStore({
  // Store has slices
  reducer: {
    cart: CartReducer, // We have one slice in the store now.
  },
});

export default appStore;
