<template>
  <div>
    <h1>New Component!</h1>
    <h1>{{ myMessage }}</h1>
    <input @keyup.enter="childInputChange" v-model="childInputData" type="text">
  </div>
</template>

<script>
export default {
  name: 'NewComponent',
  data: function () {
    return {
      childInputData: '',      
    }
  },
  props: {
    myMessage: {
      type: String,
      required: true,
    },
  },
  methods: {
    childInputChange: function () {
      this.$emit('child-emit-data', this.childInputData)
      this.childInputData = ''
    },
  },
}
</script>

<style>

</style>