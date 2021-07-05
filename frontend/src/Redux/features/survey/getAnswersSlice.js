import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAnswer = createAsyncThunk(
  "answers/getAnswer",
  async (question, { rejectWithValue }) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/survey/getAnswer",
        { question },
        config
      );
      localStorage.setItem("error", response.data);

      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      localStorage.setItem("error", error.response.data.error);

      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  answers: [],
  status: "idle",
  error: null,
};
const answerSlice = createSlice({
  name: "answer",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAnswer.fulfilled]: (state, action) => {
      state.answers = action.payload;
    },

    [getAnswer.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const selectanswerError = (state) => state.answer.error;

export default answerSlice.reducer;
