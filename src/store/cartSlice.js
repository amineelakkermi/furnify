// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  totalAmount: 0,
  deliverCharge: 5,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
      state.totalAmount += action.payload.totalPrice;
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.data.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const newQuantity = action.payload.quantity;
        const oldQuantity = state.data[itemIndex].quantity;
        state.data[itemIndex].quantity = newQuantity;
        state.data[itemIndex].totalPrice += (newQuantity - oldQuantity) * state.data[itemIndex].price;
        state.totalAmount += (newQuantity - oldQuantity) * state.data[itemIndex].price;
      }
    },
    removeItem: (state, action) => {
      const removedItem = state.data.findIndex((item) => item.id === action.payload.id);
      if (removedItem !== -1) {
        state.totalAmount -= state.data[removedItem].totalPrice;
        state.data.splice(removedItem, 1);
      }
    },
    getCartTotal: (state) => {
      let totalAmount = 0;
      for (let i = 0; i < state.data.length; i++) {
        totalAmount += state.data[i].totalPrice; // Utiliser totalPrice au lieu de price
      }
      state.totalAmount = totalAmount;
    }
    
  }
});

export const { addToCart, updateQuantity, removeItem, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
