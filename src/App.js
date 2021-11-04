import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/header';
import AllBooks from './Components/AllBooks/allBooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import EditBook from './Components/EditBook/EditBook';
import AddBook from './Components/AddBook/addBook';
import HomeBook from './Components/HomeBook/homebook';
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home/home';

const queryClient = new QueryClient();
/* the 'new QueryClient' is creating an instance referenced with the variable 'const queryClent' (but it could have any name you want)
 *  and has aces to all the methods and properties of the 'Queryclient' ==>> these methods are used to interact with the cache of the browser.
 *
 * By wrapping the whole app in the '<QueryClientProvider client={queryClient}>' tag, every page and every component
 * has aces to all the data that is stored inside the cache */

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Toaster />
        <Switch>
          <Route exact path={'/portfolio-page'} component={Home} />

          <Route exact path={'/books'} component={HomeBook} />
          <Route exact path={'/books/all'} component={AllBooks} />
          <Route exact path={'/books/add'} component={AddBook} />
          <Route exact path={'/books/edit/:id'} component={EditBook} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
