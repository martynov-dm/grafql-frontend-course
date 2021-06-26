import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

const queryAvailablePets = loader("./gql/queryAvailablePets.gql");

export const useQueryAvailablePets = () => useQuery(queryAvailablePets);
