<template>
  <div class="container col-4 mt-5">
    <div class="mb-2 d-flex justify-content-center">
      <h4 class="me-2">Movie List </h4><h4 class="text-decoration-underline" id="violet">✔</h4> 
    </div>
    <div class="input-group mb-3">
      <input @keyup.enter="createMovieList" class="form-control" type="text" v-model="movieTitle"  placeholder="어떤 영화를 보고 싶나요? :)">
      <button @click="createMovieList" class="btn btn-outline-secondary" type="button" id="button-addon2">더하기</button>
    </div>
    <DiaryList/>
  </div>
</template>

<script>
import DiaryList from '@/components/DiaryList'

export default {
  name: 'Diary',
  data: function () {
    return {
      movieTitle: '',
    }
  },
  components: {
    DiaryList,
  },
  methods: {
    createMovieList: function () {
      const movieItem = {
        title: this.movieTitle,
        watched: false,
      }
      if (this.movieTitle.trim()) {
        this.$store.dispatch('createMovieList', movieItem)
      }
      this.movieTitle = ''
    },
  },
}
</script>

<style scoped>

</style>