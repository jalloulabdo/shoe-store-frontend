"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataFromApi from "@/utils/api";
import { stat } from "fs/promises";

export const fetchProduct = createAsyncThunk(
  "data/fetchDataProductDetail",
  async (url: any) => {
    const response = await fetchDataFromApi(url);
    const data = await response.json();

    return data;
  }
);

const initialState = {
  product: [],
  loading: false,
  error: null,
} as any;

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = [];
        state.product.push(action.payload);
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
