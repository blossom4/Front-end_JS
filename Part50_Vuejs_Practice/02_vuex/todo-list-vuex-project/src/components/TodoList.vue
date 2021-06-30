<template>
  <div>
    <h1>TodoList</h1>
    <TodoListItem 
      v-for="(todo, idx) in todos"
      :key="idx"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    todos: function () {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>