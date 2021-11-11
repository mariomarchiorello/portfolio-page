import * as React from 'react';
import Providers from './Providers';
import Router from './Router/router';

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
