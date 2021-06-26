import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "../Redux/features/logged/loggedSlice";
// import getUserReducer from "../features/logged/getUserSlice";
// import getUserReducer from "../features/logged/getUserSlice";

export const store = configureStore({
  reducer: {
    logged: loggedReducer,
    // user: getUserReducer,
  },
});
