import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product';

// Path: client/src/features/counter/counterSlice.js

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
