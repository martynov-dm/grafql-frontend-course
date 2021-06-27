import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const uri = "https://funded-pet-library.moonhighway.com/";
const link = createHttpLink({ uri });
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});
