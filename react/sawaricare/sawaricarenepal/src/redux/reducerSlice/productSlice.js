import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    wishlistItems: [],    
    cartItems: []
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id);
      } else {
        state.wishlistItems.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id);
    },
    addToCartItems: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.cartItems.push({...action.payload, quantity:1}); // Add new item with initial quantity
      }
    },
    removeFromCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
  }
});

export const { addToWishlist, removeFromWishlist, addToCartItems, removeFromCartItems } = productSlice.actions;

export default productSlice.reducer;
