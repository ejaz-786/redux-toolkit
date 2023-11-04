import { createSlice } from "@reduxjs/toolkit";

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
});

// export the actions and a redcer;
export const { increamentBonus } = bonusSlice.actions;
export default bonusSlice.reducer;
