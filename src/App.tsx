import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo';

import { ContactProvider } from './Context/ContactContext';

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ContactProvider>
          <ThemeProvider theme={defaultTheme}>
            <Router />
            <GlobalStyle />
          </ThemeProvider>
        </ContactProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

