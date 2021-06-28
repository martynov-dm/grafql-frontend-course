import { loader } from "graphql.macro";
import { useSubscription } from "@apollo/client";

const subscriptionPetReturned = loader("./gql/subscriptionPetReturned.gql");

export const usePetReturned = () => {
  const { loading, error, data } = useSubscription(subscriptionPetReturned);

  const pet = data?.petReturned?.pet;

  return { pet, error, loading };
};
