import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import CONFIG from './configs/config';
import New from './components/animes/New';
import Main from './components/layout/Main';
import { getList, getToken } from './api/HandleRequest';
import Form from './components/EditorCustom/Index';
import EditorCustom from './components/EditorCustom/EditorCustom';
import Editor from './components/Editor/Index';

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

  async function getData() {
    // await getList(CONFIG.API_IMAGE, 8, 0);
    await getList(CONFIG.API_POST_TEST, 8, 0);

  }

  async function refreshToken() {
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
          <Route exact path="/form-one">
            <Form />
          </Route>
          <Route exact path="/form-two">
            <EditorCustom />
          </Route>
          <Route exact path="/form-three">
            <Editor />
          </Route>
          <Route exact path="/tin-tuc-anime">
            <New />
          </Route>
          <Route exact path="/nhan-vat">
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
