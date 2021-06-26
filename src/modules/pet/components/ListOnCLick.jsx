import React from "react";
import { useQueryAllAvailablePets } from "../hooks/useQueryAllAvailablePets";

export const ListOnCLick = () => {
  const { getPets, loading, error, pets } = useQueryAllAvailablePets();

  const loaderJSX = loading && <p>Loading...</p>;
  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  const petsJSX = pets?.map(({ id, name, weight }) => (
    <p key={id}>
      <span>Name: {name}</span>
      <span>Weight: {weight}</span>
    </p>
  ));

  return (
    <>
      <button onClick={getPets}>LoadPets</button>
      {loaderJSX}
      {errorJSX}
      {petsJSX}
    </>
  );
};
