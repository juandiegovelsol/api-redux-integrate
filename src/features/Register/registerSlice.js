import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./registerAPI";

const initialState = {
  loading: false,
  createUserResponse: {},
};

export const postUserAsync = createAsyncThunk(
  "user/postUser",
  async ({ email, password }) => {
    const data = await createUser({ email, password });
    return data;
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    clearRegisterInfo: (state, action) => {
      state.createUserResponse = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.createUserResponse = action.payload;
      });
  },
});

export const { clearRegisterInfo } = registerSlice.actions;

export const selectRegister = (state) => state.register;

export default registerSlice.reducer;
