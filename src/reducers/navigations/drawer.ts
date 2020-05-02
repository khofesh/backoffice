import { DrawerInterface, DrawerAction } from "../../actions/interfaces";
import { ActionTypes } from "../../actions/types";

export const DrawerReducer = (
  state: DrawerInterface = { isOpen: false },
  action: DrawerAction
) => {
  switch (action.type) {
    case ActionTypes.drawer:
      return action.payload;

    default:
      return state;
  }
};
