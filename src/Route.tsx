import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import New from './components/animes/New';
// import LoginGoogle from './components/login/google';
import Main from './components/layout/Main';

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
      <h2>Home</h2>
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
          <Route path="/tin-tuc-anime">
            <New />
          </Route>
          <Route path="/nhan-vat">
            <Character />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}
