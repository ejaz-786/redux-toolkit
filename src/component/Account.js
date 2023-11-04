import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
} from "../slices/accountSlice";

const Account = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const bonus = useSelector((state) => state.bonus);

  return (
    <div className="card">
      <h3>Account</h3>
      <h4>ammount:{account.amount}</h4>
      <h4>bonus:{bonus.points}</h4>
      <div>
        <button onClick={() => dispatch(increament())}>Increament</button>
        <button onClick={() => dispatch(decreament())}>Decreament</button>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => value && dispatch(increamentByAmount(value))}>
          INCR by value
        </button>
      </div>
    </div>
  );
};

export default Account;
