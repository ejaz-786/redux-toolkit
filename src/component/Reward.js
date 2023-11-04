import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { increamentByTwo, increamentReward } from "../reducers/reward";

const Reward = () => {
  const reward = useSelector((state) => state.reward);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <h3>Reward component:</h3>
        <h4>reward points:{reward.rewardPoints}</h4>
        <div>
          <button onClick={() => dispatch(increamentReward())}>
            Increament Reward
          </button>
          <button onClick={() => dispatch(increamentByTwo(2))}>
            increamentByTwo
          </button>
        </div>
      </div>
    </>
  );
};

export default Reward;
