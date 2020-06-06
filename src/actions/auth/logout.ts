import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { LogoutInterface } from "../interfaces";
import { navigate } from "@reach/router";

export const logoutAction = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<LogoutInterface>(
      "http://localhost:8090/api/v0/admin/logout",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response?.data?.code === 200) {
      dispatch({
        type: ActionTypes.logout,
        payload: response?.data,
      });
      dispatch({
        type: ActionTypes.login,
        payload: {
          access_token: "",
          access_expire: "",
          refresh_token: "",
          refresh_expire: "",
          userData: {
            id: "",
            email: "",
            role: "",
          },
        },
      });
      dispatch({
        type: ActionTypes.authenticated,
        payload: { status: false },
      });
      navigate("/login");
    }
  };
};
