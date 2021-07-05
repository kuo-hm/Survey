import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "../Redux/features/logged/loggedSlice";
import getSurveyReducer from "../Redux/features/survey/surveySlice";
import getAnswerReducer from "../Redux/features/survey/answerSlice";
import answerReducer from "../Redux/features/survey/getAnswersSlice";

export const store = configureStore({
  reducer: {
    logged: loggedReducer,
    survey: getSurveyReducer,
    answers: getAnswerReducer,
    getAnswer: answerReducer,
  },
});
