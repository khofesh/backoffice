import {
  DrawerInterface,
  DrawerAction,
  TempDrawerAction,
  TempDrawerInterface,
} from "../../actions/interfaces";
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

export const TempDrawerReducer = (
  state: TempDrawerInterface = { isOpen: false },
  action: TempDrawerAction
) => {
  switch (action.type) {
    case ActionTypes.tempdrawer:
      return action.payload;

    default:
      return state;
  }
};
