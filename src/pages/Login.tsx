import React, { FunctionComponent } from "react";
import { RouteComponentProps, Link } from "@reach/router";

const Login: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <p>login page</p>
    </div>
  );
};

export default Login;
