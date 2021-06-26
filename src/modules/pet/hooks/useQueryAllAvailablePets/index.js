import { loader } from "graphql.macro";
import { useLazyQuery } from "@apollo/client";

const queryAllAvailablePets = loader("./gql/queryAllAvailablePets.gql");

export const useQueryAllAvailablePets = () => {
  const [getPets, { loading, data, error }] = useLazyQuery(
    queryAllAvailablePets
  );

  return { getPets, loading, pets: data?.allPets, error };
};
