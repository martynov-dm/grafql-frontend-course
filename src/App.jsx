import React from "react";
import { Registration } from "./modules/customer/components/Registration";
import { Login } from "./modules/customer/components/Login";
import { Pet } from "./modules/pet/components/Pet";

export const App = () => {
  return (
    <>
      <Registration />
      <Login />
      <Pet />
    </>
  );
};
