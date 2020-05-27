import {
  AuthenticatedInterface,
  AuthenticatedAction,
} from "../actions/interfaces";
import { ActionTypes } from "../actions/types";

export const AuthenticatedReducer = (
  state: AuthenticatedInterface = { status: false },
  action: AuthenticatedAction
) => {
  switch (action.type) {
    case ActionTypes.authenticated:
      return action.payload;

    default:
      return state;
  }
};
