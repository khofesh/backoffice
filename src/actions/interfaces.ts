import { ActionTypes } from "./types";

export interface LoginInterface {
  token: string;
}

export interface LoginInitialState {
  token: "";
}

export interface LoginAction {
  type: ActionTypes.login;
  payload: LoginInterface;
}
