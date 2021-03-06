import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import New from './components/animes/New';
import Main from './components/layout/Main';
import LoginGoogle from './components/login/google';
import { getList, getToken } from './api/HandleRequest';
import CONFIG from './configs/config';


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

  async function getData()
  {
    await getList(CONFIG.API_IMAGE, 8, 0);
  }

  async function refreshToken()
  {
    const res = await getToken(CONFIG.API_REFRESH_TOKEN);
    if (!res.isError) {
      localStorage.setItem("token", JSON.stringify(res.result.token));
    }
  }

  return (
    <div className="container">
      <h2>Home page</h2>
      <button className="btn-load-more" onClick={getData}><p><span className="bg"></span><span className="base"></span><span className="text">Check Token</span></p></button>
      <button className="btn-load-more" onClick={refreshToken}><p><span className="bg"></span><span className="base"></span><span className="text">Refresh Token</span></p></button>
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
