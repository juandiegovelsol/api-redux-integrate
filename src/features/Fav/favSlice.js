import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOneList, createOneFav, deleteFav } from "./favAPI";

const initialState = {
  loading: false,
  list: [],
  addFavWindowHandler: false,
  response: {},
  deleteResponse: {},
};

export const getOneListAsync = createAsyncThunk(
  "favs/getOneList",
  async ({ token, iduser }) => {
    const data = await getOneList({ token, iduser });
    return data;
  }
);
export const createOneFavAsync = createAsyncThunk(
  "favs/createFav",
  async ({ token, title, description, link, idlist }) => {
    const data = await createOneFav({
      token,
      title,
      description,
      link,
      idlist,
    });
    return data;
  }
);

export const deleteFavAsync = createAsyncThunk(
  "favs/deleteFav",
  async ({ token, idfavs }) => {
    const data = await deleteFav({
      token,
      idfavs,
    });
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
    clearResponse: (state, action) => {
      state.response = {};
    },
    clearDeleteResponse: (state, action) => {
      state.deleteResponse = {};
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
      })
      .addCase(createOneFavAsync.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(deleteFavAsync.fulfilled, (state, action) => {
        state.deleteResponse = action.payload;
      });
  },
});

export const { addFavOpen, addFavClose, clearResponse, clearDeleteResponse } =
  favSlice.actions;

export const selectFav = (state) => state.fav;

export default favSlice.reducer;
