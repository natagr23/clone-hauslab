import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// import { HashRouter as Router } from 'react-router-dom';

import 'core-js/es/array';
import 'core-js/es/string';
import 'core-js/es/object';
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// const cache = new InMemoryCache();

// const client = new ApolloClient({
//   cache: cache,
//   uri: 'https://api.github.com/graphql',
//   headers: {
//     authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ApolloProvider client={client}>
  <App />
  // </ApolloProvider>
);
