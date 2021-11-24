import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';

import GlobalStyle from './assets/styles/global'
import {ApplicationProvider} from "./context/application";

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
