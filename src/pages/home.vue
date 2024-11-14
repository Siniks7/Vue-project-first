<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <br />
  <br />
  <div v-if="isUserLogged">
    <p>User {{ user.name }} is logged</p>
  </div>
  <div v-else>
    <button @click="handleLoginClick" class="btn btnPrimary">Login</button>
  </div>
  <br />
  <br />
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
  methods: {
    handleLoginClick() {
      this.$store.dispatch('setUser')
    }
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLogged
    },
    user() {
      return this.$store.getters.getUser
    },
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
