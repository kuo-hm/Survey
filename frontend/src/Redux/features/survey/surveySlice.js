import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const surveyAdapter = createEntityAdapter();
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

const surveySlice = createSlice({
  name: "survey",
  initialState: surveyAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [getSurvey.fulfilled]: (state, action) => {
      surveyAdapter.addMany(state, action.payload);
    },

    [getSurvey.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
    },
  },
});
export const { selectAll: selectAllSurvey } = surveyAdapter.getSelectors(
  (state) => state.survey
);

export default surveySlice.reducer;
