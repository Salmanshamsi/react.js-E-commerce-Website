import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/globalSlice'
import  productSliceReducer  from './Slices/FilterProdSlice'

export const store = configureStore({
  reducer: {
    cart: counterReducer,
    product : productSliceReducer,
  },
})