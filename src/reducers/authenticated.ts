import {
  AuthenticatedInterface,
  AuthenticatedAction,
} from "../actions/interfaces";
import { ActionTypes } from "../actions/types";

export const AuthenticatedReducer = (
  state: AuthenticatedInterface = { status: true },
  action: AuthenticatedAction
) => {
  switch (action.type) {
    case ActionTypes.authenticated:
      return action.payload;

    default:
      return state;
  }
};
