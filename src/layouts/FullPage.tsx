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
  return (
    <div>
      <main>
        <div>
          {props.authenticated.status && props.login.access_token ? (
            <Redirect to="/" noThrow />
          ) : (
            props.children
          )}
        </div>
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
