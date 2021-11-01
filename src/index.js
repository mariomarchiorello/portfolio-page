import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './Styles/globalstyle';
import {StyledEngineProvider} from "@mui/material/styles";


ReactDOM.render(
  <StyledEngineProvider injectFirst>

    <GlobalStyle />
    <App />
  </StyledEngineProvider>,
  document.getElementById('root')
);
