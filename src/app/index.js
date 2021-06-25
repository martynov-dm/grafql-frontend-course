import React from 'react'
import {
    gql, useQuery,
} from "@apollo/client";

const names = gql`
  query {
   allPets {
        name
    }
  }
`;

export const App = () => {
    const { loading, error, data } = useQuery(names);
    console.log(data)
    return  <h1>App</h1>
}
