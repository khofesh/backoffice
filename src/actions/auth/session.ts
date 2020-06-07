import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { LoginResponse } from "../interfaces";

export const checkSession = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<LoginResponse>(
      "/api/v0/admin/check-session",
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
      dispatch({
        type: ActionTypes.login,
        payload: response?.data,
      });
    } else {
      dispatch({
        type: ActionTypes.authenticated,
        payload: { status: false },
      });
      dispatch({
        type: ActionTypes.login,
        payload: response?.data,
      });
    }
  };
};
