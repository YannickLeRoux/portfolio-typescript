import { FETCH_REPOS  } from '../actions/types';
import { Action } from 'redux';

const INITIAL_STATE = { all:[] };

export default (state=INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }

}