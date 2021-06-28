import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const root = "funded-pet-library.moonhighway.com/";

const uri = `https://${root}`;

const cache = new InMemoryCache();

const httpLink = createHttpLink({ uri });
const wsLink = new WebSocketLink({
  uri: `wss://${root}/graphql`,
  options: {
    reconnect: true,
  },
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const wrappedHttpLink = authLink.concat(httpLink);
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  wrappedHttpLink
);

export const client = new ApolloClient({
  link,
  cache,
});
