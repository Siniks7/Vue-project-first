import { createStore } from 'vuex'

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        title: 'Finish course',
        tags: ['work', 'home']
      }
    ]
  },
  actions: {
    setNotes(context, notes) {
      context.commit('setNotes', notes)
    },
    addNote(context, newNote) {
      context.commit('addNote', newNote)
    },
    deleteNote(context, index) {
      context.commit('deleteNote', index)
    }
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note)
    },
    deleteNote(state, index) {
      state.notes.splice(index, 1)
    },
    setNotes(state, notes) {
      state.notes = notes
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})
