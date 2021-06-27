import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "../Redux/features/logged/loggedSlice";
import getSurveyReducer from "../Redux/features/survey/surveySlice";

export const store = configureStore({
  reducer: {
    logged: loggedReducer,
    survey: getSurveyReducer,
  },
});
