export const GET_OVERVIEW_LIST = "GET_OVERVIEW_LIST";
export const GET_OVERVIEW_ID = "GET_OVERVIEW_ID";

export const handleOverviewGetList = (data) => {

  return (dispatch) => {
    dispatch({
      type: GET_OVERVIEW_LIST,
      payload: data
    });
  };
};

export const handleOverviewGetItem = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_OVERVIEW_ID,
      payload: data
    });
  };
};

