import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";
import { useForm } from "../useForm";

const mutationCreateAccount = loader("./gql/mutationCreateAccount.gql");

export const useCustomerCreator = () => {
  const [addUser, { data }] = useMutation(mutationCreateAccount);
  const { form, handleChange } = useForm({
    account: { name: "", username: "", password: "" },
  });

  const save = () => {
    const { account } = form;
    addUser({
      variables: { account },
    });
  };

  return { form, handleChange, save, createdAccount: data?.createAccount };
};
