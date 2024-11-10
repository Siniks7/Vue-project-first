<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <div>{{ user.id }}</div>
      <div>{{ user.name }}</div>
      <div>{{ user.admin ? 'Это админ' : 'Обычный пользователь' }}</div>
    </li>
  </ul>
  <div>{{ getUsersLength }}</div>
</template>

<script>
export default {
  computed: {
    getUsers() {
      return this.$store.getters.getUsers
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength
    }
  }
}
</script>
