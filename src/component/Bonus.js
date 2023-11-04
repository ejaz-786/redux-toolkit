import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { increamentBonus } from "../slices/bonusSlice";

const Bonus = () => {
  const account = useSelector((state) => state.account);
  const bonus = useSelector((state) => state.bonus);

  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <h3>Bonus</h3>
        <h4>points:{bonus.points}</h4>
        <h4>amount:{account.amount}</h4>
        <div>
          <button onClick={() => dispatch(increamentBonus())}>
            Increament Bonus
          </button>
        </div>
      </div>
    </>
  );
};

export default Bonus;
