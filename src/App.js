import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Account from "./component/Account";
import Bonus from "./component/Bonus";
import Reward from "./component/Reward";
import { useEffect } from "react";
import { getCurrentUserAccount } from "./slices/accountSlice";
import Admin from "./component/Admin";

function App() {
  const account = useSelector((state) => state.account);
  const bonus = useSelector((state) => state.bonus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAccount(1));
  }, []);

  return (
    <>
      <div className="App">
        <h1>App component:</h1>
        <h2>
          Current Amount:
          {account.pending ? <h3>Loading......</h3> : account.amount}{" "}
        </h2>
        <h2>Total Points: {bonus.points} </h2>
        <hr />
        <Admin />
        <Account />
        <Bonus />
        <Reward />
      </div>
    </>
  );
}

export default App;
