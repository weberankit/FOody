//default import
import CartReducer from "./useCartSlice";
import { configureStore } from "@reduxjs/toolkit";
const myAppStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default myAppStore;
