import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";

const mutationCheckIn = loader("./gql/mutationCheckIn.gql");

export const useCheckIn = () => {
  const [_checkIn, { data, error }] = useMutation(mutationCheckIn);

  const checkIn = (id) => {
    _checkIn({
      variables: {
        id,
      },
    }).catch((err) => console.log(err));
  };

  return { checkIn, pet: data?.checkIn?.pet, error };
};
