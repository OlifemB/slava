import {
  APP_LOADED,
} from "../actions/appActions";

const initialState = {
  loaded: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED:
      return {
        ...state,
        loaded: action.payload
      };

    default:
      return state;
  }
};