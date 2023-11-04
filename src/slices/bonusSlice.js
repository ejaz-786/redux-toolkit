import { createAction, createSlice } from "@reduxjs/toolkit";

// extra Action of account
const incrementByAmt = createAction("account/increamentByAmount");

const initialState = {
  points: 0,
};

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increamentBonus: (state, action) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmt, (state, action) => {
      if (action.payload > 100) {
        state.points += 5;
      }
    });
  },
});

// export the actions and a redcer;
export const { increamentBonus } = bonusSlice.actions;
export default bonusSlice.reducer;
