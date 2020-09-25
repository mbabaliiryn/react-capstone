/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { combineReducers } from 'redux';
import recipiesReducers from './Recipes';
import filter from './filter';

const rootReducer = combineReducers({
  recipies: recipiesReducers,
  filter,
});

export default rootReducer;
