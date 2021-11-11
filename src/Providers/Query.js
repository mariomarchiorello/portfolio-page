import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
/* the 'new QueryClient' is creating an instance referenced with the variable 'const queryClent' (but it could have any name you want)
 *  and has aces to all the methods and properties of the 'Queryclient' ==>> these methods are used to interact with the cache of the browser.
 *
 * By wrapping the whole app in the '<QueryClientProvider client={queryClient}>' tag, every page and every component
 * has aces to all the data that is stored inside the cache */

const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
export default QueryProvider;
