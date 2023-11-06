import React, { useState } from "react";
import "./style.css";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { data, isLoading, error, isSuccess } = useGetAccountQuery();
  const [addAccount, response] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  const [value, setValue] = useState();

  if (isLoading) return <p>Loading admin data......</p>;
  return (
    <>
      <div className="card">
        <h3>Admin Component - use of rtk query </h3>
        <h4>list of account and amount : </h4>
        <button onClick={() => addAccount(500, data.length + 1)}>
          add+account
        </button>
        {data &&
          data.map((item) => (
            <div className="list">
              <button onClick={() => deleteAccount(item.id)}>X</button>
              <p>
                {item.id} : {item.amount}
              </p>

              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => updateAccount({ id: item.id, amount: +value })}
              >
                update
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Admin;
