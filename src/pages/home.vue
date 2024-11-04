<template>
  <Form @onSubmit="handleSubmit" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
export default {
  name: 'App',
  components: { Form },
  methods: {
    handleSubmit(note) {
      console.log(note)
    }
  }
}
</script>
