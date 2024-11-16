<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Form />
  <List :items="getNotesState" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
export default {
  name: 'App',
  components: { Form, List },
  mounted() {
    this.getNotes()
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.$store.dispatch('setNotes', JSON.parse(localNotes))
      }
    }
  },
  computed: {
    getNotesState() {
      const state = this.$store.getters.getNotes
      localStorage.setItem('notes', JSON.stringify(state))
      return state
    }
  }
}
</script>
