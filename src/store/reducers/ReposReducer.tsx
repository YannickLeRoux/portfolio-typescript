import { FETCH_REPOS } from '../actions/types';
import { ActionWithPayload } from 'src/store/actions/fetchRepos';

// read this tuto:
// https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/
const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action: ActionWithPayload<string, any>) => {
  switch (action.type) {
    case FETCH_REPOS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
};
