import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';

export const getAllTestimonials = createAsyncThunk(
    'testimonial/getAllTestimonials',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/testimonials/get`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState: {
        getAllTestimonials: { data: null, isLoading: false, error: null },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTestimonials.pending, (state) => {
                state.getAllTestimonials.isLoading = true;
            })
            .addCase(getAllTestimonials.fulfilled, (state, action) => {
                state.getAllTestimonials.isLoading = false;
                state.getAllTestimonials.data = action.payload.data;
            })
            .addCase(getAllTestimonials.rejected, (state, action) => {
                state.getAllTestimonials.isLoading = false;
                state.getAllTestimonials.error = action.payload;
            });
    },
});


export default testimonialSlice.reducer;
