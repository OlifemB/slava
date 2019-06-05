import {
  GET_OVERVIEW_LIST,
  GET_OVERVIEW_ID
} from '@actions/overviewActions.js'

const initialState = {
  loaded: false,
  type: '',
  list: {},
  id:''
};

export const overviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OVERVIEW_LIST:
      return {
        ...state,
        list: action.payload,
        loaded: true,
      };

      case GET_OVERVIEW_ID:
        return {
          ...state,
          id: action.payload,
        };

    default:
      return state;
  }
};