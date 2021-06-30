<template>
  <div>
    <span @click="updateTodo">{{ todo.title }}</span>
    <button @click="deleteTodo">delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    }
  },
  methods: {
    deleteTodo: function () {
      // console.log('deleted.')
      this.$store.dispatch('deleteTodo', this.todo)
    },
    updateTodo: function () {
      // console.log('updated.')
      this.$store.dispatch('updateTodo', this.todo)
    }
  },
}
</script>

<style>

</style>