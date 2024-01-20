"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataFromApi from "@/utils/api";
import { stat } from "fs/promises";

export const fetchProducts = createAsyncThunk(
  "data/fetchDataProduct",
  async (urlProducts: any) => {
    const response = await fetchDataFromApi(urlProducts);
    const data = await response.json();

    return data;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
} as any;

const userSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [];
        state.products.push(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
