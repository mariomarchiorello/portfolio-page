import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AddNewBook from "./Components/AddBook";
import Header from "./Components/Header";
import AllBooks from "./Components/SeeAllBooks/allBooks";
import { QueryClient, QueryClientProvider } from "react-query"
import EditBook from "./Components/EditBook/changeBook";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header/>
        <Switch>
          {/* will add suspense fallback later----- maybe spinner, maybe some small animation------*/}
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/books"} component={AllBooks}/>
          <Route exact path={"/add-new"} component={AddNewBook}/>
          <Route exact path={"/book/:id"} component={EditBook}/>
{/*          <Route exact path={"/add-new"} component={AddNewBook}/>*/}


        </Switch>
      </Router>


    </QueryClientProvider>
  );
}

export default App;
