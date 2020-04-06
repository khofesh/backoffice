import React, { FunctionComponent } from "react";
import { RouteComponentProps, Link } from "@reach/router";

const NotFound: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div style={{ margin: 10 }}>
      <p>Sorry, nothing here</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
