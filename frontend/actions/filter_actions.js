import {fetchListings} from './listing_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

const changeBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds,
});

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return dispatch(fetchListings(getState().ui.filterReducer.bound));
  }
}