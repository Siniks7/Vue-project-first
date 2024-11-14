import { createStore } from 'vuex'

export const store = createStore({
  state: {
    user: null,
    users: [
      { id: 1, name: 'evgenii', admin: true },
      { id: 2, name: 'alex', admin: true },
      { id: 3, name: 'garry', admin: false }
    ]
  },
  actions: {
    setUser(context) {
      const fakeUser = {
        id: 11441,
        name: 'Nikolay',
        admin: true
      }
      context.commit('setUser', fakeUser)
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log(state.user)
    }
  },
  getters: {
    isUserLogged(state) {
      return state.user ? true : false
    },
    getUser(state) {
      return state.user
    },
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
