import { ApolloClient, InMemoryCache } from "@apollo/client";
import { persistCache } from 'apollo-cache-persist';

const client = new ApolloClient({
  uri: 'https://api.geographql.rudio.dev/graphql',
  cache: new InMemoryCache(),
});

export default client;