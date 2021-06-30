<template>
  <div>
    <h4>{{ todo.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    }
  }
}
</script>

<style>

</style>