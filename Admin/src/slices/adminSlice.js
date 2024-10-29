import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant";

export const register = createAsyncThunk(
  "admin/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        email,

        password,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "admin/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
    register: { data: null, isLoading: false, error: null },
    login: { data: null, isLoading: false, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add users
    builder
      .addCase(register.pending, (state) => {
        state.register.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.register.isLoading = false;
        state.register.data = action.payload.data;
      })
      .addCase(register.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.error = action.payload;
      })
      //   login
      .addCase(login.pending, (state) => {
        state.login.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login.isLoading = false;
        state.login.data = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.login.isLoading = false;
        state.login.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
