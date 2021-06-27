import React from "react";
import { Counter } from "./Counter";
import { List } from "./List";
import { ListOnCLick } from "./ListOnCLick";
import { Profile } from "./Profile";
import { CheckInPet } from "./CheckInPet";

export const Pet = () => {
  return (
    <>
      <CheckInPet />
      <h1>Pet</h1>
      <Profile />
      <Counter />
      <List />
      <ListOnCLick />
    </>
  );
};
