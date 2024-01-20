"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataFromApi from "@/utils/api";
import { stat } from "fs/promises";

export const fetchCategory = createAsyncThunk("data/fetchData", async (url) => {
  const response = await fetchDataFromApi(url);
  const data = await response.json();

  return data;
});

const initialState = {
  categories: [],
} as any;

const userSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categories = [];
      state.categories.push(action.payload);
    });
  },
});

export default userSlice.reducer;
