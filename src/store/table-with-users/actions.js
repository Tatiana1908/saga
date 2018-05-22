import { createAction } from 'redux-actions'

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
export const addNewUser = user => ({
  type: 'addNewUser',
  payload: user
})
export const setUser = createAction('setUser')

export const findUser = id => ({
  type: 'findUser',
  payload: id
})
export const giveUser = createAction('giveUser')


export const deleteUser = id => ({
  type: 'deleteUser',
  payload: id
})

export const removedAction = createAction('removedAction')
