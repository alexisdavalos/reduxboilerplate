import { ACTION_NAME } from "../actions/";

const initialState = {
  date: Date.now()
};

const newReducer = (state = initialState, action) => {
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

export default newReducer;