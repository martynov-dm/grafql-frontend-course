import { loader } from "graphql.macro";
import { useState } from "react";
import { useMutation } from "@apollo/client";

const mutationCreateAccount = loader("./gql/mutationCreateAccount.gql");

export const useCustomer = () => {
  const [addUser, { data }] = useMutation(mutationCreateAccount);
  console.log(data);
  const [values, setValues] = useState({
    account: {
      name: "",
      username: "",
      password: "",
    },
  });
  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const save = () => {
    const { account } = values;
    addUser({
      variables: { account },
    });
  };

  return { values, handleChange, save, createdAccount: data?.createAccount };
};
