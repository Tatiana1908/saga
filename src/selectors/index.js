import { createSelector } from 'reselect'
import { prop, find, propEq } from 'ramda'

export const selectUsers = state => state.users
export const createUserstSelector = createSelector.bind(null, selectUsers)

// export const selectUsers = createTodoListSelector(prop('users'))
// export const selectUserById = createSelector(
//     [selectTodos, (_, id) => id],
//     (todos, todoId) => find(propEq('id', todoId))(todos)
// )
