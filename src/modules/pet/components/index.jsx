import React from "react";
import { Counter } from "./Counter";
import { List } from "./List";
import { ListOnCLick } from "./ListOnCLick";

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <Counter />
      <List />
      <ListOnCLick />
    </>
  );
};
