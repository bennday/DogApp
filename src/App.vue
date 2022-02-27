<template>
  <div id="app">
    <ListAllDogs msg="DogApp"/>
  </div>
</template>

<script>
import ListAllDogs from './components/ListAllDogs.vue'

export default {
  name: 'App',
  components: {
    ListAllDogs
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0 auto;
  max-width:1200px;
  padding: 30px 60px;
  background: #efefef;
  border-radius: 30px;
}
</style>
