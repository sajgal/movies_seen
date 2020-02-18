import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { theme } from './styles';
import Layout from './components/templates/Layout';
import MovieList from './components/molecules/MovieList';
import MovieSearch from './components/molecules/MovieSearch';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.black};
    margin: 0;
  }

  * {
    font-family: 'Kulim Park', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/admin">
            <Layout><MovieSearch /></Layout>
          </Route>
          <Route path="/movies">
            <Layout><MovieList /></Layout>
          </Route>
          <Route path="/">
            <Layout>Home</Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
