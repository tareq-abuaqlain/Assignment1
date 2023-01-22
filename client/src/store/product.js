import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  totalNumber: 0,
  totalPrice: 0,
  categories: [],
  filteredData: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.data.push(...action.payload.data);
      state.totalNumber = action.payload.totalNumber + state.totalNumber;
      state.totalPrice = action.payload.totalPrice + state.totalPrice;
      state.categories = action.payload.categories;
    },
    sortProductByName: (state, action) => {
      if (action.payload) {
        state.data = state.data.sort((a, b) => b.product_name.localeCompare(a.product_name));
      } else {
        state.data = state.data.sort((a, b) => a.product_name.localeCompare(b.product_name));
      }
    },
    sortProductByPrice: (state, action) => {
      if (action.payload) {
        state.data = state.data.sort((a, b) => b.price - a.price);
      } else {
        state.data = state.data.sort((a, b) => a.price - b.price);
      }
    },
    filterProductByCategory: (state, action) => {
      state.filteredData = action.payload.filteredData;
      state.totalNumber = action.payload.totalNumber;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addProduct, sortProductByName, sortProductByPrice, filterProductByCategory } = productSlice.actions;
export default productSlice.reducer;
