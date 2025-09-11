import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    resName: "",
  },
  reducers: {
    addItem: (state, action) => {
      const price =
        (action.payload.price || action.payload.defaultPrice || 0) / 100;
      if (state.resName === "" || state.resName === action.payload.resName) {
        const existingItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
          state.total += price;
        } else {
          state.items.push(action.payload);
          state.total += price;
          state.resName = action.payload.resName;
        }
      } else {
        state.items = [action.payload];
        state.total = price;
        state.resName = action.payload.resName;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.total -= (item.price || item.defaultPrice || 0) / 100;
        } else {
          state.items.splice(itemIndex, 1);
          state.total -= (item.price || item.defaultPrice || 0) / 100;
        }
        if (state.items.length === 0) {
          state.resName = "";
        }
      }
    },
    incItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      item.quantity += 1;
      state.total += (item.price || item.defaultPrice || 0) / 100;
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.total = 0;
      state.resName = "";
    },
  },
});

export const { addItem, removeItem, clearCart, incItem } = cartSlice.actions;

export default cartSlice.reducer;
