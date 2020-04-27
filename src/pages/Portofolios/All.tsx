import React, { FunctionComponent } from "react";
import { Link, RouteComponentProps } from "@reach/router";

const All: FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <div>
      <nav>
        <Link to="123">stock 1</Link> <Link to="124">stock 2</Link>
      </nav>

      {props.children}
    </div>
  );
};

export default All;
