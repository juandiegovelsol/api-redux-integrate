import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "./loginAPI";

const initialState = {
  loading: false,
  info: [],
};

export const postLoginAsync = createAsyncThunk(
  "login/postLogin",
  async ({ email, password }) => {
    const data = await postLogin({ email, password });
    console.log("Data async", data);
    return data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
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

export const selectLogin = (state) => state.login;

export default loginSlice.reducer;
