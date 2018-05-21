import { createAction } from 'redux-actions'

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
export const addNewUser = user => ({
  type: 'addNewUser',
  payload: user
})
export const setUser = createAction('setUser')

// export const updateUsers = createAction('updateUsers')
