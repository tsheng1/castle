import {combineReducers} from 'redux';

import modal from './modal_reducer.js';
import filterReducer from './filter_reducer';

export default combineReducers ({
  modal,
  filterReducer
})