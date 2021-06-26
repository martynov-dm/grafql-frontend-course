import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

const queryAllPets = loader("./gql/queryAllPets.gql");

export const useQueryAllPets = () => {
  const { loading, error, data } = useQuery(queryAllPets);

  const pets = data ? data.allPets : null;

  return { loading, error, pets };
};
