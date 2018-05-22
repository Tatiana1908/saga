import { handleActions } from 'redux-actions'
import { append } from 'ramda'

import {combineReducers} from 'redux'

// import { routerReducer} from 'react-router-redux'

import * as actions from './actions'
import {openModal} from '../add-user-btn/index'

const initialState = {
  users: [],
  isOpen: false,
};

const reducer = handleActions({
  [actions.setUsers]: (state, action) => ({
    ...state, users: action.payload
  }),
  [actions.setUser]: (state, { payload: user }) => ({
    ...state,
    users: append(user, state.users)
  }),
  [openModal]: (state) => ({
    ...state, isOpen: !state.isOpen
  }),
  [actions.addNewUser]: (state, action) => ({
     ...state, users: state.users.concat(action.payload)
  }),
}, initialState);

// export default combineReducers({
//   routing: routerReducer,
//   reducer,
// })
export default reducer
