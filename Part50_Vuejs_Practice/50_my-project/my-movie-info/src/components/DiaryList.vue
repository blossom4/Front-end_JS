<template>
  <div>
    <DiaryListItem
      v-for="(movie, idx) in myMovies"
      :key="idx"
      :movie="movie"
    />
  </div>
</template>

<script>
import DiaryListItem from '@/components/DiaryListItem'

export default {
  name: 'DiaryList',
  components: {
    DiaryListItem,
  },
  computed: {
    myMovies: function () {
      return this.$store.state.myMovies
    },
  },
}
</script>

<style>

</style>