import { Toaster } from 'react-hot-toast';
import QueryProvider from './Query';
import StyleProvider from './Style';

const Providers = ({ children }) => (
  <>
    <StyleProvider>
      <QueryProvider>
        <Toaster />
        {children}
      </QueryProvider>
    </StyleProvider>
  </>
);

export default Providers;
