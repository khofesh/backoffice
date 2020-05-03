import { combineReducers } from "redux";
import { loginReducer } from "./login";
import {
  LoginInterface,
  AuthenticatedInterface,
  DrawerInterface,
  TempDrawerInterface,
} from "../actions/interfaces";
import { AuthenticatedReducer } from "./authenticated";
import { DrawerReducer, TempDrawerReducer } from "./navigations/drawer";

export interface StoreState {
  login: LoginInterface;
  authenticated: AuthenticatedInterface;
  drawer: DrawerInterface;
  tempdrawer: TempDrawerInterface;
}
export const reducers = combineReducers<StoreState>({
  login: loginReducer,
  authenticated: AuthenticatedReducer,
  drawer: DrawerReducer,
  tempdrawer: TempDrawerReducer,
});
