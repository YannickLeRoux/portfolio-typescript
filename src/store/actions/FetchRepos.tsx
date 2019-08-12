import axios from 'axios';
import { Dispatch } from 'redux';
import { FETCH_REPOS } from './types';

const URL: string = 'https://api.github.com/users/yannickleroux/repos';

interface Repos {}

export const fetchRepos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Repos[]>(URL);
    dispatch({ type: 'FETCH_REPOS', payload: response.data });
  };
};
