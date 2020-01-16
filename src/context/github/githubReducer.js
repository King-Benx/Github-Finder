import {
  GET_USERS,
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_USERS
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    default:
      return state;
  }
}