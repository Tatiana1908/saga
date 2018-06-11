import { handleActions } from 'redux-actions';
import { append } from 'ramda';

import {combineReducers} from 'redux';

import { routerReducer} from 'react-router-redux';

import * as actions from './actions';

const initialState = {
  users: [],
  isOpen: false,
  activeUser: {},
  filteredUsers: [],
  autorisedUser: [],
};

const reducer = handleActions({
  [actions.setUsers]: (state, action) => ({
    ...state, users: action.payload,
  }),
  [actions.setUser]: (state, { payload: user }) => ({
    ...state,
    users: append(user, state.users),
  }),
  [actions.openModal]: (state) => ({
    ...state, isOpen: !state.isOpen,
  }),
  [actions.giveUser]: (state,  action ) => ({
    ...state, activeUser: action.payload,
  }),
  [actions.removedAction]: (state,  { payload: id })  => ({
    ...state, users: state.users.filter(user => user.id !== id),
  }),
  [actions.autoriseUser]: (state,  { payload: user })  => ({
    ...state, autorisedUser: user,
  }),
}, initialState);

export default combineReducers({
  routing: routerReducer,
  reducer,
});
