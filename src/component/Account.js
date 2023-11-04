import React from "react";
import "./style.css";

const Account = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="card">
      <h3>Account:00</h3>
      <h4>bonus:000</h4>
      <div>
        <button>Increament</button>
        <button>Decreament</button>
      </div>
      <div>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button>INCR by value</button>
        <button>DECR by value</button>
      </div>
    </div>
  );
};

export default Account;
