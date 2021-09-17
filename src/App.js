import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/home';
import Header from './Components/Header/header';
import AllBooks from './Components/AllBooks/allBooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import EditBook from './Components/EditBook/EditBook';
import AddBook from './Components/AddBook/addBook';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          {/* will add suspense fallback later----- maybe spinner, maybe some small animation------*/}
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/books'} component={AllBooks} />
          <Route exact path={'/books/add'} component={AddBook} />
          <Route exact path={'/books/:id'} component={EditBook} />
          {/*          <Route exact path={"/add-new"} component={AddNewBook}/>*/}
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
