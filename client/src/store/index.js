import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product';

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
