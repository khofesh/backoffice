import { Dispatch } from "redux";
import { ActionTypes } from "../types";

export const drawerAction = (drawer: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.drawer,
      payload: { isOpen: drawer },
    });
  };
};
