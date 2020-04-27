import React, { FunctionComponent } from "react";
import { Redirect } from "@reach/router";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { AuthenticatedInterface, LoginInterface } from "../actions/interfaces";

interface FullPageProps {
  authenticated: AuthenticatedInterface;
  login: LoginInterface;
}

const _FullPage: FunctionComponent<FullPageProps> = (props) => {
  console.log(props.authenticated);
  if (props.authenticated.status && props.login.token)
    return <Redirect to="/" noThrow />;

  return (
    <div>
      <main>
        <div>{props.children}</div>
      </main>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return { authenticated: state.authenticated, login: state.login };
};

const FullPage = connect<
  {
    authenticated: AuthenticatedInterface;
    login: LoginInterface;
  },
  {},
  {},
  StoreState
>(
  mapStateToProps,
  {}
)(_FullPage);

export default FullPage;
