import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { LoginInterface } from "./interfaces";

export const loginAction = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<LoginInterface>(
      "https://reqres.in/api/login",
      {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    );

    dispatch({
      type: ActionTypes.login,
      payload: response.data
    });
  };
};
