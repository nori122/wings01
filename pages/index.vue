<template>
  <div class="container">
    <p class="title is-1 is-spaced">user: {{ $store.getters.getUserName }}</p>
    <button class="button" @click="login">ログイン</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      newLimit: '',
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
  },
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
    addTodo() {
      const todo = this.newTodo
      const limit = this.newLimit
      this.$store.dispatch('addTodo', { todo, limit })
      this.newTodo = ''
      this.newLimit = ''
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
