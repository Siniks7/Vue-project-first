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
      return state.users
    }
  }
})
