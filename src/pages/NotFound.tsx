import React, { FunctionComponent } from "react";
import { RouteComponentProps, Link } from "@reach/router";

interface NotFoundProps extends RouteComponentProps {
  routePath?: string;
  routeName?: string;
}
const NotFound: FunctionComponent<NotFoundProps> = ({
  routeName,
  routePath,
}) => {
  return (
    <div style={{ margin: 10 }}>
      <p>Sorry, nothing here</p>
      <Link to={routePath ? routePath : "/"}>{routeName}</Link>
    </div>
  );
};

NotFound.defaultProps = {
  routePath: "/",
  routeName: "Home",
};

export default NotFound;
