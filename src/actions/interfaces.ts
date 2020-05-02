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

export interface AuthenticatedInterface {
  status: boolean;
}

export interface AuthenticatedAction {
  type: ActionTypes.authenticated;
  payload: AuthenticatedInterface;
}

export interface DrawerInterface {
  isOpen: boolean;
}

export interface DrawerAction {
  type: ActionTypes.drawer;
  payload: DrawerInterface;
}
