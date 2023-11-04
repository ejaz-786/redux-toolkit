// Redcuer api in redux-toolkit

import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const increamentReward = createAction("reward/increamentReward");
export const increamentByTwo = createAction("reward/increamentByTwo");

// reward state
const initialState = {
  rewardPoints: 0,
};

// reward Reducer - createreducer (state , (builder) => builder.addCase(actCreator , (state ,action) )

export const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increamentReward, (state, action) => {
      state.rewardPoints++;
    })
    .addCase(increamentByTwo, (state, action) => {
      state.rewardPoints += +action.payload;
    });
});
