import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

interface ProfileProps extends RouteComponentProps {
  userId?: string;
}
const Profile: FunctionComponent<ProfileProps> = (props) => {
  return <div>profile {props.userId}</div>;
};

export default Profile;
