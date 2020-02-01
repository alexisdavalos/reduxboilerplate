import { ACTION_NAME } from "../actions/";

const initialState = {
  date: Date.now()
};

export const syncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return {
        ...state,
        date: action.payload
      };
    default:
      return state;
  }
};
