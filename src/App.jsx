import React from "react";
import { Registration } from "./modules/customer/components/Registration";
import { Login } from "./modules/customer/components/Login";
import { Pet } from "./modules/pet/components/Pet";
import { PetReturned } from "./modules/pet/components/PetReturned";

export const App = () => {
  return (
    <>
      <PetReturned />
      <Registration />
      <Login />
      <Pet />
    </>
  );
};
