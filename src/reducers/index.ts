import { combineReducers } from "redux";
import { loginReducer } from "./login";
import {
  LoginInterface,
  AuthenticatedInterface,
  DrawerInterface,
  TempDrawerInterface,
  SessionInterface,
  LogoutInterface,
} from "../actions/interfaces";
import { AuthenticatedReducer } from "./authenticated";
import { checkSessionReducer } from "./auth/session";
import { logoutReducer } from "./auth/logout";
import { DrawerReducer, TempDrawerReducer } from "./navigations/drawer";

export interface StoreState {
  login: LoginInterface;
  authenticated: AuthenticatedInterface;
  drawer: DrawerInterface;
  tempdrawer: TempDrawerInterface;
  checkSession: SessionInterface;
  logout: LogoutInterface;
}
export const reducers = combineReducers<StoreState>({
  login: loginReducer,
  authenticated: AuthenticatedReducer,
  drawer: DrawerReducer,
  tempdrawer: TempDrawerReducer,
  checkSession: checkSessionReducer,
  logout: logoutReducer,
});
