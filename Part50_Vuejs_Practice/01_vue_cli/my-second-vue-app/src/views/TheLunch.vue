<template>
  <div>
    <h1>점심메뉴 추천</h1>
    <button @click="pickOneLunchMenu">Click</button>
    <p>오늘의 점심메뉴: {{ selectedMenu }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data: function () {
    return {
      lunch: ['간장계란밥🥣', '연어초밥🍣', '닭가슴살샐러드🥗'],
      selectedMenu: '',
    }
  },
  methods: {
    pickOneLunchMenu: function () {
      this.selectedMenu = _.sample(this.lunch)
    },
  }
}
</script>

<style>

</style>