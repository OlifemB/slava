import { combineReducers } from "redux";
import { appReducer } from "@reducers/app";
import { overviewReducer } from "@reducers/overview";

export const rootReducer = combineReducers({
  app: appReducer,
  overview: overviewReducer
});