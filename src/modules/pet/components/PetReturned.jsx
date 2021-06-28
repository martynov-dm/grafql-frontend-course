import React from "react";
import { useQueryAllAvailablePets } from "../hooks/useQueryAllAvailablePets";
import { usePetReturned } from "../hooks/usePetReturned";

export const PetReturned = () => {
  const { pet, error, loading } = usePetReturned();

  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  );

  const loaderJSX = loading && <p>Loading...</p>;
  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  return (
    <>
      <h1>Pet returned</h1>
      {petJSX}
      {loaderJSX}
      {errorJSX}
    </>
  );
};
