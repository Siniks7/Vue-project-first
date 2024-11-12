import { createStore } from 'vuex'

export const store = createStore({
  state: {
    users: [
      { id: 1, name: 'evgenii', admin: true },
      { id: 2, name: 'alex', admin: true },
      { id: 3, name: 'garry', admin: false }
    ]
  },
  getters: {
    getUsers(state) {
      return state.users.filter(user => !user.admin)
    },
    getAllUsers(state) {
      return state.users
    },
    getUserbyId: state => id => state.users.find(user => user.id === id),
    getUsersLength(state, getters) {
      return `Количество пользователей: ${getters.getAllUsers.length}`
    }
  }
})
