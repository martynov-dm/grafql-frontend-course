import React from "react";
import { Counter } from "./Counter";
import { List } from "./List";
import { ListOnCLick } from "./ListOnCLick";
import { Profile } from "./Profile";

export const Pet = () => {
  return (
    <>
      <Profile />
      <h1>Pet</h1>
      <Counter />
      <List />
      <ListOnCLick />
    </>
  );
};
