import React from "react";
import { useCustomerAuth } from "../hooks/useCustomerAuth";

export const Login = () => {
  const { handleChange, save, userData } = useCustomerAuth();

  const customerJSX = userData && (
    <p>{`Customer with username ${userData?.customer?.username} logged in`}</p>
  );

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={save}>
        Save
      </button>
      {customerJSX}
    </>
  );
};
