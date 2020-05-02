import { combineReducers } from "redux";
import { loginReducer } from "./login";
import {
  LoginInterface,
  AuthenticatedInterface,
  DrawerInterface,
} from "../actions/interfaces";
import { AuthenticatedReducer } from "./authenticated";
import { DrawerReducer } from "./navigations/drawer";

export interface StoreState {
  login: LoginInterface;
  authenticated: AuthenticatedInterface;
  drawer: DrawerInterface;
}
export const reducers = combineReducers<StoreState>({
  login: loginReducer,
  authenticated: AuthenticatedReducer,
  drawer: DrawerReducer,
});
