<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="deleteNote" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
export default {
  name: 'App',
  components: { Form, List },
  data() {
    return {
      notes: [
        {
          title: 'Learn Vue 3',
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        },
        {
          title: 'Hello',
          tags: []
        }
      ]
    }
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note)
      console.log(note)
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>
