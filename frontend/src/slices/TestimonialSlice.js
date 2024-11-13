import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';

// Action to fetch all testimonials
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
        data: null,
        isLoading: false,
        error: null,
        getAllTestimonials: { data: null, isLoading: false, error: null },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle the pending state
            .addCase(getAllTestimonials.pending, (state) => {
                state.getAllTestimonials.isLoading = true;
            })
            // Handle the fulfilled state
            .addCase(getAllTestimonials.fulfilled, (state, action) => {
                state.getAllTestimonials.isLoading = false;
                state.getAllTestimonials.data = action.payload.data;
            })
            // Handle the rejected state
            .addCase(getAllTestimonials.rejected, (state, action) => {
                state.getAllTestimonials.isLoading = false;
                state.getAllTestimonials.error = action.payload;
            });
    },
});

export default testimonialSlice.reducer;
