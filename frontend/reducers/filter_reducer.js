import {UPDATE_BOUNDS} from "../actions/filter_actions";

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_BOUNDS) {
    const newBound = {
      "bound": action.bounds
    };
    return Object.assign({}, state, newBound);
  } else {
    return state;
  }
};

export default filtersReducer;

