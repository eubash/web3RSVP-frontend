import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.BASE_API_URL,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;