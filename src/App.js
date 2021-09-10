import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ShowAll from "./Components/SeeAllBooks";
import AddNewBook from "./Components/AddBook";
import ChangeBook from "./Components/AddBook/changeBook";


function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* will add suspense fallback later----- maybe spinner, maybe some small animation------*/}
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/show-all"} component={ShowAll}/>
          <Route exact path={"/add-new"} component={AddNewBook}/>
          <Route exact path={"/change"} component={ChangeBook}/>
{/*          <Route exact path={"/add-new"} component={AddNewBook}/>*/}


        </Switch>
      </Router>


    </>
  );
}

export default App;
