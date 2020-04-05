import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { LoginInterface } from "../actions/interfaces";

export interface StoreState {
  login: LoginInterface;
}
export const reducers = combineReducers<StoreState>({
  login: loginReducer
});
