<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>{{ getUsers }}</p>
</template>

<script>
export default {
  computed: {
    getUsers() {
      return this.$store.getters.getUsers
    }
  }
}
</script>
