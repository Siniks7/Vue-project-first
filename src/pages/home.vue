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
  <br />
  <br />
  <input type="number" v-model="userId" />
  {{ getUser }}
  <br />
  <br />
</template>

<script>
export default {
  data() {
    return {
      userId: 3
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers
    },
    getUser() {
      return this.$store.getters.getUserbyId(this.userId) || 'user not found'
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength
    }
  }
}
</script>
