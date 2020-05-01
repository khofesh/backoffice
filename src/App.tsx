import React, { FunctionComponent } from "react";
import { Router, RouteComponentProps } from "@reach/router";

import FullPage from "./layouts/FullPage";
import MainPage from "./layouts/MainPage";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Users/Profile";
import AllStocks from "./pages/Portofolios/All";
import Stock from "./pages/Portofolios/Stock";
import PortoIndex from "./pages/Portofolios/PortoIndex";

const fullPageLayout = (
  Component: React.ComponentType
): FunctionComponent<RouteComponentProps> => (props) => {
  return (
    <FullPage>
      <Component {...props} />
    </FullPage>
  );
};

const mainPageLayout = (
  Component: React.ComponentType
): FunctionComponent<RouteComponentProps> => (props) => {
  return (
    <MainPage>
      <Component {...props} />
    </MainPage>
  );
};

const HomePage = mainPageLayout(Home);
const ProfilePage = mainPageLayout(Profile);
const AllStocksPage = mainPageLayout(AllStocks);

const LoginPage = fullPageLayout(Login);

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <LoginPage path="login" />
      <ProfilePage path="profile/:userId" />
      <AllStocksPage path="portofolios">
        <PortoIndex path="/" />
        <Stock path=":stockId" />
      </AllStocksPage>
      <NotFound default />
    </Router>
  );
}

export default App;
