import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

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
});

// export the actions and a redcer;

export const { increament, decreament, increamentByAmount } =
  accountSlice.actions;

export default accountSlice.reducer;
