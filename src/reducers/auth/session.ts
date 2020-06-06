import { SessionAction, SessionInterface } from "../../actions/interfaces";
import { ActionTypes } from "../../actions/types";

export const checkSessionReducer = (
  state: SessionInterface = { token: "" },
  action: SessionAction
) => {
  switch (action.type) {
    case ActionTypes.session:
      return action.payload;

    default:
      return state;
  }
};
