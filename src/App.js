import "./App.css";
import Account from "./component/Account";
import Bonus from "./component/Bonus";

function App() {
  return (
    <>
      <div className="App">
        <h1>App component:</h1>
        <h2>Current Amount: 000</h2>
        <h2>Total Bonus: 000</h2>
        <hr />
        <Account />
        <Bonus />
      </div>
    </>
  );
}

export default App;
