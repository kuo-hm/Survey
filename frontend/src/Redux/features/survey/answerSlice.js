import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const answerAdapter = createEntityAdapter();

export const postAnswer = createAsyncThunk(
  "answer/postAnswer",
  async (Answers, { rejectWithValue }) => {
    const question = Answers.question;
    const data = Answers.data;

    localStorage.removeItem("errorAnswer");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("/api/survey/postAnswer", { question, data }, config);
      localStorage.removeItem("errorSurvey");
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      console.log(error.response.data);
      localStorage.setItem("errorRegister", error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);

const answerSlice = createSlice({
  name: "answer",
  initialState: answerAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [postAnswer.fulfilled]: (state, action) => {},

    [postAnswer.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const selectRegisterError = (state) => state.answer.error;

export default answerSlice.reducer;
