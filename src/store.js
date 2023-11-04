import { rewardReducer } from "./reducers/reward";
import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";

// store
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
  },
});
