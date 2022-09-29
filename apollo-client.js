import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.BASE_API_URL, //"https://api.thegraph.com/subgraphs/name/eubash/rsvp",
  cache: new InMemoryCache(),
});

export default client;