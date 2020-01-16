import React, { useReducer } from 'react';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import axios from 'axios';
import {
  GET_USERS,
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_USERS
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async (text) => {
    setLoading()
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  }

  // get users
  const getUsers = async () => {
    setLoading()
    const res = await axios.get("https://api.github.com/users");
    dispatch({ type: GET_USERS, payload: res.data });
  }
  // clear users
  const clearUsers = async () => {
    setLoading()
    const res = await axios.get("https://api.github.com/users");
    dispatch({ type: CLEAR_USERS, payload: res.data });
  }

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return <GithubContext.Provider
    value={{
      users: state.users,
      loading: state.loading,
      searchUsers,
      getUsers,
      clearUsers
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;