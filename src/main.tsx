import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './apps/container';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>
);
