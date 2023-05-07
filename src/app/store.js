import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/Login/loginSlice";
import favReducer from "../features/Fav/favSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    fav: favReducer,
  },
});
