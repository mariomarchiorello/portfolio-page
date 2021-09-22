import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/home';
import Header from './Components/Header/header';
import AllBooks from './Components/AllBooks/allBooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import EditBook from './Components/EditBook/EditBook';
import AddBook from './Components/AddBook/addBook';

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
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/books'} component={AllBooks} />
          <Route exact path={'/books/add'} component={AddBook} />
          <Route exact path={'/books/:id'} component={EditBook} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
