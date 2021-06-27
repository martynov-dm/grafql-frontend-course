import { loader } from "graphql.macro";
import { useLazyQuery } from "@apollo/client";

const queryProfile = loader("./gql/queryPetById.gql");

export const useQueryProfile = () => {
  const [getProfile, { loading, data, error }] = useLazyQuery(queryProfile);

  return { getProfile, loading, error, profile: data?.petById };
};
