<template>
  <div class="container col-4 mt-4">
    <div class="mb-2 d-flex justify-content-center">
      <!-- <h4 class="me-2">Todo List </h4><h4 class="text-decoration-underline" id="violet">✔</h4>  -->
    </div>
    <div class="input-group mb-5">
      <input @keyup.enter="createMovieList" class="form-control" type="text" v-model="movieTitle"  placeholder="어떤 할 일이 있나요? :)">
      <button @click="createMovieList" class="btn btn-outline-secondary" type="button" id="button-addon2">더하기</button>
    </div>
    <DiaryList/>
    <hr>
    <h3 class="my-4">정산</h3>
    <h5>spk = 0</h5> 
    <h5>while != Friday:</h5> 
    <h5>&nbsp;&nbsp;&nbsp;&nbsp;if !('지윤's List):</h5>   
    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spk += 5</h5>      
    <h5>&nbsp;&nbsp;&nbsp;&nbsp;if breakfast:</h5>    
    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spk -= 2</h5>
    <h5>if spk > 0:</h5>
    <h5>&nbsp;&nbsp;&nbsp;&nbsp;return spk</h5>
    <h5>return ('밥먹여주기', '소원권')</h5>
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