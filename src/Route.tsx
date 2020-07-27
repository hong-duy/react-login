import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import New from './components/animes/New';
import Main from './components/layout/Main';
import LoginGoogle from './components/login/google';


function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <h2>Home page</h2>
    </div>
  );
}

function Character() {
  return (
    <div className="container">
      <h2>Nhân vật</h2>
    </div>
  );
}

export default function AppRoute() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tin-tuc-anime">
            <New />
          </Route>
          <Route exact path="/nhan-vat">
            <Character />
          </Route>
          <Route exact path="/auth/google">
            <LoginGoogle />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}
