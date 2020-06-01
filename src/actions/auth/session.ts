import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { LoginResponse } from "../interfaces";
import { navigate } from "@reach/router";

export const checkSession = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<LoginResponse>(
      "http://localhost:8090/api/v0/admin/check-session",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
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
      navigate("/login");
    }
  };
};
