import { LoginAction, LoginInterface } from "../actions/interfaces";
import { ActionTypes } from "../actions/types";

export const loginReducer = (
  state: LoginInterface = { token: "somethingsomething" },
  action: LoginAction
) => {
  switch (action.type) {
    case ActionTypes.login:
      return action.payload;
    default:
      return state;
  }
};
