import {
  CLEAR_DETAILS,
  SET_COUNTRIES,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORDS,
} from "./details-action";

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbords: [],
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: "loading",
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        status: "received",
        currentCountry: payload,
      };
    case CLEAR_DETAILS:
      return {
        initialState,
      };
    case SET_NEIGHBORDS:
      return {
        ...state,
        neighbords: payload,
      };
    default:
      return state;
  }
};
