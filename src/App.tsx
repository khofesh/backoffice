import React, { FunctionComponent, useEffect, useCallback } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";

/* layouts */
import FullPage from "./layouts/FullPage";
import MainPage from "./layouts/MainPage";

/* pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Users/Profile";
import AllStocks from "./pages/Portofolios/All";
import Stock from "./pages/Portofolios/Stock";
import PortoIndex from "./pages/Portofolios/PortoIndex";

/* redux */
import { AuthenticatedInterface, LoginInterface } from "./actions/interfaces";
import { StoreState } from "./reducers";
import { checkSession } from "./actions/auth/session";

const publicRoute = (
  Component: React.ComponentType
): FunctionComponent<RouteComponentProps> => (props) => {
  return (
    <FullPage>
      <Component {...props} />
    </FullPage>
  );
};

const protectedRoute = (
  Component: React.ComponentType
): FunctionComponent<RouteComponentProps> => (props) => {
  return (
    <MainPage>
      <Component {...props} />
    </MainPage>
  );
};

const HomePage = protectedRoute(Home);
const ProfilePage = protectedRoute(Profile);
const AllStocksPage = protectedRoute(AllStocks);

const LoginPage = publicRoute(Login);

interface AppProps {
  authenticated: AuthenticatedInterface;
  login: LoginInterface;
  checkSession(): any;
}

const _App: FunctionComponent<AppProps> = ({
  checkSession,
  authenticated,
  login,
}) => {
  const session = useCallback(() => {
    checkSession();
  }, [checkSession]);

  useEffect(() => {
    session();
  }, [session]);

  return (
    <>
      <Router>
        {authenticated.status && login.access_token ? (
          <>
            <HomePage path="/" />
            <ProfilePage path="profile/:userId" />
            <AllStocksPage path="portofolios">
              <PortoIndex path="/" />
              <Stock path=":stockId" />
            </AllStocksPage>
          </>
        ) : null}

        <LoginPage path="login" />
        <NotFound
          default
          routeName={
            authenticated.status && login.access_token ? "Home" : "Login"
          }
          routePath={
            authenticated.status && login.access_token ? "/" : "/login"
          }
        />
      </Router>
    </>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    authenticated: state.authenticated,
    login: state.login,
  };
};

const App = connect<
  {
    authenticated: AuthenticatedInterface;
    login: LoginInterface;
  },
  {
    checkSession: () => (dispatch: Dispatch<AnyAction>) => any;
  },
  {},
  StoreState
>(mapStateToProps, { checkSession })(_App);

export default App;
