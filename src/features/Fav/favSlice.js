import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getOneList,
  createOneFav,
  deleteFav,
  createList,
  getAllList,
} from "./favAPI";

const initialState = {
  loading: false,
  list: [],
  addFavWindowHandler: false,
  response: {},
  deleteResponse: {},
  createListResponse: {},
  allLists: [],
  modalWindowHandler: false,
};

export const getOneListAsync = createAsyncThunk(
  "favs/getOneList",
  async ({ token, iduser }) => {
    const data = await getOneList({ token, iduser });
    return data;
  }
);
export const getAllListAsync = createAsyncThunk(
  "favs/getAllList",
  async ({ token, email }) => {
    const data = await getAllList({ token, email });
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

export const createListAsync = createAsyncThunk(
  "favs/createList",
  async ({ token, listname, iduser }) => {
    const data = await createList({
      token,
      listname,
      iduser,
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
    clearListResponse: (state, action) => {
      state.createListResponse = {};
    },
    modalWindowOpen: (state, action) => {
      state.modalWindowHandler = true;
    },
    modalWindowClose: (state, action) => {
      state.modalWindowHandler = false;
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
      })
      .addCase(createListAsync.fulfilled, (state, action) => {
        state.createListResponse = action.payload;
      })
      .addCase(getAllListAsync.fulfilled, (state, action) => {
        state.allLists = action.payload;
      });
  },
});

export const {
  addFavOpen,
  addFavClose,
  clearResponse,
  clearDeleteResponse,
  clearListResponse,
  modalWindowOpen,
  modalWindowClose,
} = favSlice.actions;

export const selectFav = (state) => state.fav;

export default favSlice.reducer;
