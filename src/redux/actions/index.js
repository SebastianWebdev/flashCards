import ACTION_TYPES from '../constants/actionTypes';

export const addCard = card => ({
  type: ACTION_TYPES.ADD_CARD,
  payload: card,
});

export const initCourses = courses => ({
  type: ACTION_TYPES.INIT_COURSES,
  payload: courses,
});

export const initSettings = settings => ({
  type: ACTION_TYPES.INIT_SETTINGS,
  payload: settings,
});
