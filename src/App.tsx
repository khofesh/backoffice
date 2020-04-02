import React, { FunctionComponent } from "react";
import { Router, RouteComponentProps } from "@reach/router";

import FullPage from "./layouts/FullPage";

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

const LoginPage = fullPageLayout(Login);

function App() {
  return (
    <Router>
      <Home path="/" />
      <LoginPage path="login" />
    </Router>
  );
}

export default App;
