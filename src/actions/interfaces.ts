import { ActionTypes } from "./types";

export interface LoginInterface {
  access_token: string;
}

export interface LoginResponse {
  access_token: string;
  access_expire: number;
  refresh_token: string;
  refresh_expire: number;
  userData: {
    id: string;
    email: string;
    role: string;
  };
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

export interface TempDrawerInterface {
  isOpen: boolean;
}

export interface TempDrawerAction {
  type: ActionTypes.tempdrawer;
  payload: TempDrawerInterface;
}

export interface LogoutInterface {
  code: number;
  msg: string;
}
export interface LogoutAction {
  type: ActionTypes.logout;
  payload: LogoutInterface;
}

export interface SessionAction {
  type: ActionTypes.session;
  payload: LoginInterface;
}

export interface SessionInterface {
  access_token: string;
}
