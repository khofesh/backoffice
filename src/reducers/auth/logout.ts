import { LogoutInterface, LogoutAction } from "../../actions/interfaces";
import { ActionTypes } from "../../actions/types";

export const logoutReducer = (
  state: LogoutInterface = { code: 0, msg: "" },
  action: LogoutAction
) => {
  switch (action.type) {
    case ActionTypes.logout:
      return action.payload;

    default:
      return state;
  }
};
