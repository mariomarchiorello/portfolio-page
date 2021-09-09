import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";


function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* will add suspense fallback later----- maybe spinner, maybe some small animation------*/}
          <Route exact path={"/"} component={Home}/>
        </Switch>
      </Router>


    </>
  );
}

export default App;
