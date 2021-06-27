import React from "react";
import { useQueryAvailablePets } from "../hooks/useQueryAvailablePets";
import { useCheckIn } from "../hooks/useCheckIn";

export const CheckInPet = () => {
  const { checkIn, pet, error } = useCheckIn();
  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  );
  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  return (
    <>
      <h1>Check in</h1>
      <button onClick={() => checkIn("C-1")}>CheckIn</button>
      {petJSX}
      {errorJSX}
    </>
  );
};
