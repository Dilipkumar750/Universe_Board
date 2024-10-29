import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './slices/adminSlice'
import productSlice from './slices/productSlice'


export const store = configureStore({
  reducer: {
    admin:adminSlice,
    product: productSlice
  },
})