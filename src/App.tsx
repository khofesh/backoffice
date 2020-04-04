import React, { FunctionComponent } from "react";
import { Router, RouteComponentProps } from "@reach/router";

import FullPage from "./layouts/FullPage";
import MainPage from "./layouts/MainPage";

import Home from "./pages/Home";
import Login from "./pages/Login";

const fullPageLayout = (
  Component: React.ComponentType
): FunctionComponent<RouteComponentProps> => props => {
  return (
    <FullPage>
      <Component {...props} />
    </FullPage>
  );
};

const mainPageLayout = (
  Component: React.ComponentType
): FunctionComponent<RouteComponentProps> => props => {
  return (
    <MainPage>
      <Component {...props} />
    </MainPage>
  );
};

const HomePage = mainPageLayout(Home);

const LoginPage = fullPageLayout(Login);

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="login" />
    </Router>
  );
}

export default App;
