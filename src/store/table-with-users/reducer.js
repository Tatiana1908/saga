import { handleActions } from 'redux-actions'
import { append } from 'ramda'

import * as actions from './actions'

const initialState = {
  users: [],
}

const reducer = handleActions({
  [actions.setUsers]: (state, action) => ({
    ...state, users: action.payload
  }),
  [actions.getUsers]: (state, action) => ({
    ...state, users: action.payload
  }),
}, initialState)

export default reducer
