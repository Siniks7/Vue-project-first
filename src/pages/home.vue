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
      notes: ['task1', 'task2', 'task3']
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
