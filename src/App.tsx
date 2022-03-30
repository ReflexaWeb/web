import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';

import GlobalStyle from './assets/styles/global'
import { ApplicationProvider } from "./context/application";

ReactGA.initialize('UA-114594548-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <ApplicationProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApplicationProvider>
  );
}

export default App;
