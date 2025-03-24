import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingRemoveItem = state.cartItems.find((i) => i.id === item.id);
      if (existingRemoveItem) {
        if (existingRemoveItem.quantity > 1) {
          existingRemoveItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
