import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const surveysAdapter = createEntityAdapter();
export const postSurveys = createAsyncThunk(
  "survey/postSurveys",
  async (survey, { rejectWithValue }) => {
    const question = survey.question;
    const answer1 = survey.answer1;
    const answer2 = survey.answer2;
    const answer3 = survey.answer3;
    const answer4 = survey.answer4;

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/survey/postSurvey",
        { question, answer1, answer2, answer3, answer4 },
        config
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const surveysSlice = createSlice({
  name: "surveys",
  initialState: surveysAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [postSurveys.fulfilled]: (state, action) => {
      surveysAdapter.addMany(state, action.payload);
    },

    [postSurveys.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
    },
  },
});

export default surveysSlice.reducer;
