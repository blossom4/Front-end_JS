<template>
  <div>
    <h1>About Page</h1>
    <NewComponent @child-emit-data="parentGetData" my-message="Message from about page"/>
  </div>
</template>

<script>
import NewComponent from '@/components/NewComponent'

export default {
  name: 'About',
  components: {
    NewComponent,
  },
  methods: {
    parentGetData: function (emitInfo) {
      console.log(`${emitInfo}`)
    }
  }
}
</script>

<style>

</style>
