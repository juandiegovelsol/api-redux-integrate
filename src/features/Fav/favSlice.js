import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOneList } from "./favAPI";

const initialState = {
  loading: false,
  list: [],
  addFavWindowHandler: true,
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
  reducers: {
    addFavOpen: (state, action) => {
      state.addFavWindowHandler = true;
    },
    addFavClose: (state, action) => {
      state.addFavWindowHandler = false;
    },
  },
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

export const { addFavOpen, addFavClose } = favSlice.actions;

export const selectFav = (state) => state.fav;

export default favSlice.reducer;
