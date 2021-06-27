import { useForm } from "../useForm";
import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";

const mutationLogin = loader("./gql/mutationLogin.gql");

export const useCustomerAuth = () => {
  const [logIn, { data }] = useMutation(mutationLogin);
  const { form, handleChange } = useForm({
    account: { username: "", password: "" },
  });

  const save = () => {
    logIn({
      variables: {
        username: form.account.username,
        password: form.account.password,
      },
    }).then((userData) =>
      localStorage.setItem("token", userData.data.logIn.token)
    );
  };

  return { form, handleChange, save, userData: data?.logIn };
};
