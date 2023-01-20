import { configureStore } from "@reduxjs/toolkit";
import userDocReducer from "./userDocSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
      user: userReducer,
      userDoc:userDocReducer,
    },
  });
  