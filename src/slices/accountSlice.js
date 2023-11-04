import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 0,
};

// create Async API - using CreateAsyncThunk

export const getCurrentUserAccount = createAsyncThunk(
  "account/getCurrentUserAccount",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(`http://localhost:8000/accounts/${userId}`);
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increament: (state, action) => {
      // direct mutate the state - but internally i makes a copy of state;
      state.amount += 1;
    },
    decreament: (state, action) => {
      state.amount -= 1;
    },
    increamentByAmount: (state, action) => {
      state.amount += +action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(getCurrentUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getCurrentUserAccount.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

// export the actions and a redcer;

export const { increament, decreament, increamentByAmount } =
  accountSlice.actions;

export default accountSlice.reducer;
