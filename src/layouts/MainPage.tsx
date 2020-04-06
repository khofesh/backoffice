import React, { FunctionComponent } from "react";
import { Link, Redirect } from "@reach/router";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { AuthenticatedInterface } from "../actions/interfaces";

interface MainPageProps {
  authenticated: AuthenticatedInterface;
}

const _MainPage: FunctionComponent<MainPageProps> = props => {
  console.log(props.authenticated);
  if (!props.authenticated) return <Redirect to="login" noThrow />;

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="login">Login</Link>
      </nav>
      <main></main>
      <div>{props.children}</div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return { authenticated: state.authenticated };
};

const MainPage = connect<
  {
    authenticated: AuthenticatedInterface;
  },
  {},
  {},
  StoreState
>(
  mapStateToProps,
  {}
)(_MainPage);

export default MainPage;
