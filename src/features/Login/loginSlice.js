import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "./loginAPI";

const initialState = {
  loading: false,
  info: [],
};

export const postLoginAsync = createAsyncThunk(
  "login/postLogin",
  async ({ email, password }) => {
    console.log("login", email, password);
    const data = await postLogin({ email, password });
    return data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearLoginInfo: (state, action) => {
      state.info = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLoginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload;
      });
  },
});

export const { clearLoginInfo } = loginSlice.actions;

export const selectLogin = (state) => state.login;

export default loginSlice.reducer;
