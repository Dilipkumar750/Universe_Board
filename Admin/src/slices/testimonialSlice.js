import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';

// Action to fetch all testimonials
export const getAllTestimonials = createAsyncThunk('testimonial/getAllTestimonials', async () => {
    const response = await axios.get(`${BASE_URL}/testimonials/get`);
    return response.data;
});

// Action to delete a testimonial
export const deleteTestimonial = createAsyncThunk('testimonial/deleteTestimonial', async ({id}, {rejectWithValue}) => {

    try {
        const response= await axios.delete(`${BASE_URL}/testimonials/delete/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});


// Action to add a testimonial
export const addTestimonial = createAsyncThunk('testimonial/addTestimonial', async ({ name, title, text, rating }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${BASE_URL}/testimonials/add_testimonial`, { name, title, text, rating });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState: {
        data: null,
        loading: false,
        error: null,
        addTestimonial: { data: null, loading: false, error: null },
        getAllTestimonials: { data: null, loading: false, error: null },
        deleteTestimonial: { data: null, loading: false, error: null }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTestimonials.fulfilled, (state, action) => {
                state.getAllTestimonials.data = action.payload.data;
            })
            .addCase(deleteTestimonial.pending, (state) => {
                state.deleteTestimonial.loading = true;
            })
            .addCase(deleteTestimonial.fulfilled, (state, action) => {
                state.deleteTestimonial.loading = false;
                state.deleteTestimonial.data = action.payload.data;
            })
            .addCase(deleteTestimonial.rejected, (state, action) => {
                state.deleteTestimonial.loading = false;
                state.deleteTestimonial.error = action.payload;
            })
            // add test
            .addCase(addTestimonial.pending, (state) => {
                state.addTestimonial.loading = true;
            })
            .addCase(addTestimonial.fulfilled, (state, action) => {
                state.addTestimonial.loading = false;
                state.addTestimonial.data = action.payload.data;
            })
            .addCase(addTestimonial.rejected, (state, action) => {
                state.addTestimonial.loading = false;
                state.addTestimonial.error = action.payload;
            })
    },
});

export default testimonialSlice.reducer;
