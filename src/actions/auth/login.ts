import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { LoginResponse } from "../interfaces";
import { navigate } from "@reach/router";

/**
 *
 * @param email string fahmi@backoffice.com
 * @param password string something88888
 */
export const loginAction = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<LoginResponse>(
      "/api/v0/admin/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    if (response?.data?.access_token) {
      dispatch({
        type: ActionTypes.authenticated,
        payload: { status: true },
      });
      navigate("/");
    }
    dispatch({
      type: ActionTypes.login,
      payload: response?.data,
    });
  };
};
