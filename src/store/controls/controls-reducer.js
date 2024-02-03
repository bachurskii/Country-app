import { SET_SEARCH } from "./contorls-action";

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
    default:
      return state;
  }
};
