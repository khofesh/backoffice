import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { LoginInterface, AuthenticatedInterface } from "../actions/interfaces";
import { AuthenticatedReducer } from "./authenticated";

export interface StoreState {
  login: LoginInterface;
  authenticated: AuthenticatedInterface;
}
export const reducers = combineReducers<StoreState>({
  login: loginReducer,
  authenticated: AuthenticatedReducer
});
