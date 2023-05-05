import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/Login/loginSlice";
/* import counterReducer from '../features/counter/counterSlice'; */

export const store = configureStore({
  reducer: {
    login: loginReducer,
    /* counter: counterReducer, */
  },
});
