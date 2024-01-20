"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataFromApi from "@/utils/api";
import { stat } from "fs/promises";

export const fetchProduct = createAsyncThunk(
  "data/fetchDataProductDetail",
  async (url) => {
    const response = await fetchDataFromApi(url);
    const data = await response.json();

    return data;
  }
);

const initialState = {
  product: [],
} as any;

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = [];
      state.product.push(action.payload);
    });
  },
});

export default userSlice.reducer;
