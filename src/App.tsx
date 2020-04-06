import React, { FunctionComponent } from "react";
import { Router, RouteComponentProps } from "@reach/router";

import FullPage from "./layouts/FullPage";
import MainPage from "./layouts/MainPage";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

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
const NotFoundPage = fullPageLayout(NotFound);

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="login" />
      <NotFoundPage default />
    </Router>
  );
}

export default App;
