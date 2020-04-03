import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";

const MainPage: FunctionComponent = props => {
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

export default MainPage;
