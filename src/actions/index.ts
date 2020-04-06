import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { LoginInterface } from "./interfaces";
import { navigate } from "@reach/router";

export const loginAction = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<LoginInterface>(
      "https://reqres.in/api/login",
      {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    );

    if (response.data.token) {
      dispatch({
        type: ActionTypes.authenticated,
        payload: true
      });
      navigate("/");
    }
    dispatch({
      type: ActionTypes.login,
      payload: response.data
    });
  };
};
