import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get_all_product`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async ({category}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get_category/${category}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAllSubCategory = createAsyncThunk(
  "product/getAllSubCategory",
  async ({subCategory}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get_subcategory/${subCategory}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getImageUrl = (filename) => {
  return `${BASE_URL}/product/get_product_image/${filename}`;
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
    getAllCategory: { data: null, isLoading: false, error: null },
    getAllSubCategory: { data: null, isLoading: false, error: null },
    getAllProduct: { data: null, isLoading: false, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all package
      .addCase(getAllCategory.pending, (state) => {
        state.getAllCategory.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.getAllCategory.isLoading = false;
        state.getAllCategory.data = action.payload.data;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.getAllCategory.isLoading = false;
        state.getAllCategory.error = action.payload;
      })
      // get sub category
      .addCase(getAllSubCategory.pending, (state) => {
        state.getAllSubCategory.isLoading = true;
      })
      .addCase(getAllSubCategory.fulfilled, (state, action) => {
        state.getAllSubCategory.isLoading = false;
        state.getAllSubCategory.data = action.payload.data;
      })
      .addCase(getAllSubCategory.rejected, (state, action) => {
        state.getAllSubCategory.isLoading = false;
        state.getAllSubCategory.error = action.payload;
      })
      // get all proudct
      .addCase(getAllProduct.pending, (state) => {
        state.getAllProduct.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.getAllProduct.isLoading = false;
        state.getAllProduct.data = action.payload.data;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.getAllProduct.isLoading = false;
        state.getAllProduct.error = action.payload;
      })
  },
});

export default productSlice.reducer;
