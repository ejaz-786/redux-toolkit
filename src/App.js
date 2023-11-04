import { useSelector } from "react-redux";
import "./App.css";
import Account from "./component/Account";
import Bonus from "./component/Bonus";

function App() {
  const account = useSelector((state) => state.account);
  const bonus = useSelector((state) => state.bonus);
  return (
    <>
      <div className="App">
        <h1>App component:</h1>
        <h2>Current Amount: {account.amount}</h2>
        <h2>Total Points: {bonus.points} </h2>
        <hr />
        <Account />
        <Bonus />
      </div>
    </>
  );
}

export default App;
