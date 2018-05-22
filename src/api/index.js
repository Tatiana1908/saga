import ApiCreator from './api'

const api = ApiCreator('localhost:3000')

export const getUsers = () => api.get('users')

export const postUsers = (user) => api.post('users', {
    body: JSON.stringify(user),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

export const getUser = id => api.get(`users?id=${id}`);

export const deleteUser = (id) => api.delete(`users/${id}`)
