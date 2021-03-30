import ACTION_TYPES from '../constants/actionTypes';

export function addCard(payload) {
  return {type: ACTION_TYPES.ADD_CARD, payload};
}
