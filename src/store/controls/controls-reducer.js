import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from "./contorls-action";

const initialState = {
  search: "",
  region: "",
};

export const controlerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_REGION:
      return {
        ...state,
        region: payload,
      };
    case CLEAR_CONTROLS:
      return initialState;
    default:
      return state;
  }
};
