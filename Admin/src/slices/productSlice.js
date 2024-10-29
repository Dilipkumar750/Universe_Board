import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant";
import Swal from "sweetalert2";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/product/get_all_product`);
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        timer: 2000,
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/product/get_one_product/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getImageUrl = (filename) => {
  return `${BASE_URL}/product/get_product_image/${filename}`;
};

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ productDetails,image}, { rejectWithValue }) => {
    const { _id, category, subCategory, title, description } = productDetails;
    const formData = new FormData();
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", image);
    try {
      const response = await axios.post(
        `${BASE_URL}/product/update_product/${_id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
        timer: 2000,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        timer: 2000,
      });
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/product/delete_product/${id}`
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
        timer: 2000,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        timer: 2000,
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async ({ productDetails, image }, { rejectWithValue }) => {
    const { category, subCategory, title, description } = productDetails;
    const formData = new FormData();
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", image);
    try {
      const response = await axios.post(
        `${BASE_URL}/product/add_product`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
        timer: 2000,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        timer: 2000,
      });
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
    getAllProduct: { data: null, isLoading: false, error: null },
    getOneProduct: { data: null, isLoading: false, error: null },
    updateProduct: { data: null, isLoading: false, error: null },
    addProduct: { data: null, isLoading: false, error: null },
    deleteProduct: { data: null, isLoading: false, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all package
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
      // get one package
      .addCase(getOneProduct.pending, (state) => {
        state.getOneProduct.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.getOneProduct.isLoading = false;
        state.getOneProduct.data = action.payload.data;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.getOneProduct.isLoading = false;
        state.getOneProduct.error = action.payload;
      })
      //update package
      .addCase(updateProduct.pending, (state) => {
        state.updateProduct.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.updateProduct.isLoading = false;
        state.updateProduct.data = action.payload.data;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.updateProduct.isLoading = false;
        state.updateProduct.error = action.payload;
      })

      //add new package

      .addCase(addProduct.pending, (state) => {
        state.addProduct.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.addProduct.isLoading = false;
        state.addProduct.data = action.payload.data;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.addProduct.isLoading = false;
        state.addProduct.error = action.payload;
      })
      // deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.deleteProduct.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.deleteProduct.isLoading = false;
        state.deleteProduct.data = action.payload.data;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.deleteProduct.isLoading = false;
        state.deleteProduct.error = action.payload;
      });
  },
});

export default productSlice.reducer;
