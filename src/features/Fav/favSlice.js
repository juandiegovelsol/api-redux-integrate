import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOneList } from "./favAPI";

const initialState = {
  loading: false,
  list: [],
};

export const getOneListAsync = createAsyncThunk(
  "favs/getOneList",
  async ({ token, iduser }) => {
    const data = await getOneList({ token, iduser });
    return data;
  }
);

const favSlice = createSlice({
  name: "fav",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOneListAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneListAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export const selectFav = (state) => state.fav;

export default favSlice.reducer;
