import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  export const answerAdapter = createEntityAdapter();
  
  export const getAnswer = createAsyncThunk(
    "answers/getAnswer",
    async (question, { rejectWithValue }) => {
   
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      try {
        const { data } = await axios.post("/api/survey/getAnswer",  { question }, config)
   return data
      } catch (error) {
        if (!error.response) {
          throw error;
        }
        localStorage.setItem("error", error.response.data.error);
  
        return rejectWithValue(error.response.data);
      }
    }
  );
  
  const answerSlice = createSlice({
    name: "answer",
    initialState: answerAdapter.getInitialState({ error: null, answers:[] }),
    reducers: {},
    extraReducers: {
      [getAnswer.fulfilled]: (state, action) => {
        state.isLogged = action.payload;
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
  