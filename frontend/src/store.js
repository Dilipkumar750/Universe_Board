import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import testimonialSlice from './slices/TestimonialSlice'


export const store = configureStore({
  reducer: {
    product: productSlice, 
    testimonial: testimonialSlice
  },
})