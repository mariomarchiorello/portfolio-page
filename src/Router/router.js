import * as React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import * as route from './routes';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Loader from '../Components/Loader/loader';

const Navbar = React.lazy(() => import('../Components/Navbar'));
const AddBook = React.lazy(() => import('../Pages/AddBook/addBook'));
const AllBooks = React.lazy(() => import('../Pages/AllBooks/allBooks'));
const Cv = React.lazy(() => import('../Pages/CV/cv'));
const EditBook = React.lazy(() => import('../Pages/EditBook/EditBook'));
const Home = React.lazy(() => import('../Pages/Home/home'));
const HomeBook = React.lazy(() => import('../Pages/HomeBook/homebook'));
const NotFound = React.lazy(() => import('../Pages/NotFound/notFound'));

ReactGA.initialize('UA-211973159-1');
const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const Router = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log(window.location.pathname);
  }, []);
  return (
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter history={history}>
        <Navbar />
        <Switch>
          <Route exact path={route.home} component={Home} />
          <Route exact path={route.cv} component={Cv} />
          <Route exact path={route.books} component={HomeBook} />
          <Route exact path={route.booksAll} component={AllBooks} />
          <Route exact path={route.booksAdd} component={AddBook} />
          <Route exact path={route.booksEditById} component={EditBook} />
          <Route exact path={route.notFound} component={NotFound} />

          {/*must stay at the bottom of the routs*/}

          <Route exact path="/">
            <Redirect to={route.home} />
          </Route>
          <Redirect to={route.notFound} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Router;
