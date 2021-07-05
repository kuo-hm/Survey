import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSurvey = createAsyncThunk(
  "survey/getSurvey",
  async (_, { rejectWithValue }) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.get("/api/survey/getSurvey", config);
      return response.data.surveys;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  surveys: [],
  status: "idle",
  error: null,
};
const surveySlice = createSlice({
  name: "survey",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getSurvey.fulfilled]: (state, action) => {
      state.surveys = action.payload;

      state.status = "success";
    },

    [getSurvey.rejected]: (state, action) => {
      state.status = "error";
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
    },
  },
});

export default surveySlice.reducer;
