<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="note-form_wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type ur note" />
      <TagsList :items="tags" @onItemClick="itemClickhandler" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel', 'hobby']
    }
  },
  components: { TagsList },
  methods: {
    onSubmit() {
      // this.$emit('onSubmit', this.value)
      const newNote = {
        title: this.value,
        tags: []
      }
      console.log(newNote)
      this.$store.dispatch('addNote', newNote)
      this.value = ''
    },
    itemClickhandler(tag) {
      console.log(tag)
    }
  }
}
</script>

<style lang="scss">
.note-form_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
