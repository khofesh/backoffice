import React, { FunctionComponent } from "react";
import { Redirect } from "@reach/router";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { AuthenticatedInterface } from "../actions/interfaces";

interface FullPageProps {
  authenticated: AuthenticatedInterface;
}

const _FullPage: FunctionComponent<FullPageProps> = props => {
  console.log(props.authenticated);
  if (props.authenticated.status) return <Redirect to="/" noThrow />;

  return (
    <div>
      <main>
        <div>{props.children}</div>
      </main>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return { authenticated: state.authenticated };
};

const FullPage = connect<
  {
    authenticated: AuthenticatedInterface;
  },
  {},
  {},
  StoreState
>(
  mapStateToProps,
  {}
)(_FullPage);

export default FullPage;
