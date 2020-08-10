import * as actionTypes from "../actions/actionTypes";

const initialState = {
  danhSachPhim: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return { ...state, danhSachPhim: action.movies, error: null };
    case actionTypes.FETCH_MOVIES_FAILED:
      return { ...state, error: action.err };
    default:
      return state;
  }
};
