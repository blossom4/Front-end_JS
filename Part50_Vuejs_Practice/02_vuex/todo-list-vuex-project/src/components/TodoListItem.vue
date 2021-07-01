<template>
  <div>
    <span 
      @click="updateTodo(todo)"
      :class="{ completed: todo.completed }"
    >{{ todo.title }}</span>
    <button @click="deleteTodo(todo)">delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    }
  },
  methods: {
    // deleteTodo: function () {
    //   // console.log('deleted.')
    //   this.$store.dispatch('deleteTodo', this.todo)
    // },
    // updateTodo: function () {
    //   // console.log('updated.')
    //   this.$store.dispatch('updateTodo', this.todo)
    // },
    ...mapActions([
      'deleteTodo',
      'updateTodo',
    ])
  },
}
</script>

<style>
  .completed {
    text-decoration-line: line-through
  }
</style>