import { GlobalStyle } from '../Styles/globalstyle';
import { StyledEngineProvider } from '@mui/material/styles';

const StyleProvider = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <GlobalStyle />
    {children}
  </StyledEngineProvider>
);

export default StyleProvider;
