<template>
  <div class="d-flex justify-content-between">
    <div>
      <span @click="updateMovieList" :class="{ watched: movie.watched }">{{ movie.title }}</span>
      <span class="ms-2" id="violet">✔</span>
    </div>
    <div @click="deleteMovieList" class="btn" id="gray">✖</div>
  </div>
</template>

<script>
export default {
  name: 'DiaryListItem',
  props: {
    movie: {
      type: Object,
    }
  },
  methods: {
    deleteMovieList: function () {
      this.$store.dispatch('deleteMovieList', this.movie)
    },
    updateMovieList: function () {
      this.$store.dispatch('updateMovieList', this.movie)
    },
  },
}
</script>

<style>
.watched {
  text-decoration-line: line-through
}
</style>