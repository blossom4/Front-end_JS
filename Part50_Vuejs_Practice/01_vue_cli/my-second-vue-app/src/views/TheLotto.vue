<template>
  <div>
    <h1>로또번호 추천</h1>
    <button @click="getLottoNums">Click</button>
    <h2>로또번호: {{ selectedLottoNums }}</h2>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLotto',
  data: function () {
    return {
      sampleNums: [],
      selectedLottoNums: [],
      i: Number
    }
  },
  methods: {
    getLottoNums: function () {
      const numbers = _.range(1, 46)
      this.selectedLottoNums = ''
      this.sampleNums = _.sortBy(_.sampleSize(numbers, 6))
      this.selectedLottoNums = this.sampleNums.join(' ')
      // for (this.i = 0; this.i < 6; this.i +=1) {
      //   this.selectedLottoNums += this.sampleNums[this.i] + ' '
      // }
    }
  }
}
</script>

<style>

</style>