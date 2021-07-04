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
    const answer = survey.answer;

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/survey/postSurvey",
        { question, answer },
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
      surveysAdapter.addOne(state, action.payload);
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
