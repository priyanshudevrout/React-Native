import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const newCart = [...state.items];
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Can't remove the item that is not added to cart!");
      }
      state.items = newCart;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});


export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsById = (state, id) => state.cart.items.filter(item => item.id === id);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + Number(item.price), 0);



export default cartSlice.reducer;
