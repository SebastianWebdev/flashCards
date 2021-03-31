import {combineReducers} from 'redux';
import ACTION_TYPES from '../constants/actionTypes';

const coursesReducer = (courses = null, action) => {
  if (action.type === ACTION_TYPES.INIT_COURSES) {
    return action.payload;
  }
  return courses;
};
const settingsReducer = (settings = null, action) => {
  if (action.type === ACTION_TYPES.INIT_COURSES) {
    return action.payload;
  }
  return settings;
};
const selectedCardReducer = (card = null, action) => {
  if (action.type === ACTION_TYPES.ADD_CARD) {
    return {card: action.payload};
  }
  return card;
};

export default combineReducers({
  card: selectedCardReducer,
  courses: coursesReducer,
  settings: settingsReducer,
});
