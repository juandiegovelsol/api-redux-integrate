import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/Login/loginSlice";
import favReducer from "../features/Fav/favSlice";
import registerReducer from "../features/Register/registerSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    fav: favReducer,
    register: registerReducer,
  },
});
