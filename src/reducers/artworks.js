import { actionTypes } from "../actions/actionTypes";

const Artworks = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTWORKS_SUCCESS:
      return {
        ...state,
        index: action.data,
        pagination: action.pagination,
        isComplete: action.type
      };
    case actionTypes.SEARCH_ARTWORKS_SUCCESS:
      return {
        ...state,
        index: action.data,
        pagination: action.pagination,
        isComplete: action.type
      };
    default:
      return state;
  }
};

export default Artworks;
