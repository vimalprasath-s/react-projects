import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Here, we are directly mutating the state (Directly modifying  the original state)
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.splice(action.payload)
      state.items.pop();
    },
    clearCart: (state) => {
      // state.items.length = 0;    // we can use this why not state.items = [] or state = []  bcz, immer pckg mutation thing
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
