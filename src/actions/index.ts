import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { LoginInterface } from "./interfaces";
import { navigate } from "@reach/router";

/**
 *
 * @param email string eve.holt@reqres.in
 * @param password string cityslicka
 */
export const loginAction = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<LoginInterface>(
      "https://reqres.in/api/login",
      {
        email,
        password
      }
    );

    if (response.data.token) {
      dispatch({
        type: ActionTypes.authenticated,
        payload: { status: true }
      });
      navigate("/");
    }
    dispatch({
      type: ActionTypes.login,
      payload: response.data
    });
  };
};
